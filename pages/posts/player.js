import Head from "next/head";
import Player from "../../components/Player";

export default function PlayerView(){
    return(
        <>
            <Head>
                <title>Player</title>
            </Head>
            <Player/>
        </>
    )
}