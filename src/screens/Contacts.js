import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import { fetchContacts } from '../store/actions/ContactSaga'
import Contact from '../components/Contact'

const Contacts = ({ contacts, dispatch }) => {
    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])
    const keyExtractor = todo => todo.id.value.toString()
    const renderItem = ({ item }) => <Contact {...item} />
    return (
        <FlatList
            data={contacts}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
        />
    )
}

const mapStateToProps = ({ contactReducer }) => ({ ...contactReducer })

export default connect(mapStateToProps)(Contacts)
