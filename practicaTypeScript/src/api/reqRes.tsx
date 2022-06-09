import axios from 'axios';
import React from 'react'

export const reqResApi = axios.create({
    baseURL: 'https://reqres.in/api'
});