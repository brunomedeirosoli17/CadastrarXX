import { useState,useEffect } from "react"
import ClientRepo from "../core/ClientRepo"
import ClientCollection from "../backend/db/ClientCollection"
import Client from "../core/Client"
import useTableOrForm from "./useTableOrForm"

export default function useClients() {
    const repo: ClientRepo = new ClientCollection()

    const { showForm, showTable, tableVisible } = useTableOrForm()

    const [client, setClient] = useState<Client>(Client.empty())
    const [clients, setClients] = useState<Client[]>([])

    useEffect(getAll, [])

    function getAll() {
        repo.getAll().then(clients => {
            setClients(clients)
            showTable()
        })
    }

    function selectClient(client: Client) {
        setClient(client)
        showForm()
    }

    function deleteClient(client: Client) {
        repo.delete(client)
        getAll()
    }

    function newClient() {
        setClient(Client.empty())
        showForm()
    }

    function saveClient(client: Client) {
        repo.save(client)
        getAll()
    }

    return {
        client,
        clients,
        newClient,
        saveClient,
        selectClient,
        deleteClient,
        getAll,
        tableVisible,
        showTable
    }
}