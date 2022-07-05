import React, {Component} from 'react';
import './Player'

class Player extends Component {
    state = {
        torrentInfoHash: "",
        torrentMagnetURI: "",
        torrentName: "",
        torrentProgress: "",
        torrentFiles: [],
        mp4file:{}
    }

    componentDidMount() {
        let torrentId = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent'
        let WebTorrent = require('webtorrent');
        let client = new WebTorrent();

        client.on('error', err => {
            console.log('[+] Web-torrent error: ' + err.message);
        });

        client.add(torrentId, (torrent) => {
            const interval = setInterval(() => {
                this.setState({torrentProgress: (torrent.progress * 100).toFixed(1) + '%'});
            }, 5000);

            torrent.on('done', () => {
                console.log('Progress: 100%');
                clearInterval(interval);
            })

            this.setState({
                torrentInfoHash: torrent.infoHash,
                torrentMagnetURI: torrent.magnetURI,
                torrentName: torrent.name,
                torrentFiles: torrent.files
            });

            let mp4 = this.state.torrentFiles.find(function (file) {
                return file.name.endsWith('.mp4');
            });

            mp4?.appendTo('h2');
            /*this.setState({mp4file:mp4.path});
            this.state.torrentFiles.map((file, i) => {
            })*/
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.torrentName}</h1>
                <h2></h2>
                <p><b>Torrent Info Hash: </b>{this.state.torrentInfoHash}</p>
                <p><b>Torrent Progress: </b>{this.state.torrentProgress}</p>
            </div>
        );
    }
}

export default Player;
