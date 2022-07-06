import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import React, {Component} from 'react';

import {PaginatedItems} from '../components/paginate'
import {CardMain} from "../components/film-card";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home</title>
            </Head>
            <h1 className = "title"> Главная </h1>
            <CardMain/>
        </div>
    )
}