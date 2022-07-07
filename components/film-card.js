import Link from "next/link";
import React, {Component} from "react";
import styles from "../styles/Home.module.css";
import ReactPaginate from "react-paginate";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MyPaginate = styled(ReactPaginate).attrs({
    // You can redifine classes here, if you want.
    activeClassName: 'active', // default to "disabled"
})`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  padding: 0 5rem;
  li a {
    bottom: 0;
    border-radius: 7px;
    padding: 0.1rem 1rem;
    border: gray 1px solid;
    cursor: pointer;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: #0366d6;
    border-color: transparent;
    color: white;
    min-width: 32px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;

export default class Card extends Component{
    render(){
        return (
            <div className={styles.container}>
                <h1 className = "title"> Главная </h1>
                <div className="film-card">
                    <img src="/logo.png" alt="Preview" width={200} height={200}/>
                    <div className="container">
                        <h4><b>Название фильма</b></h4>
                        <p>Возможно описание</p>
                        <Link href='/posts/player'>
                            <a>
                                <button className="btn-primary">
                                    Смотреть
                                </button></a>
                        </Link>
                    </div>
                </div>
                {/*<PaginatedItems itemsPerPage={4} />,*/}
            </div>
        )
    }
}

export  class CardList extends Component{
    static propTypes = {
        data: PropTypes.array.isRequired,
    };

    render() {
        let commentNodes = this.props.data.map(function (comment, index) {
            return (
                <li key={index} className="list-group-item">
                    <div className="film-card">
                        <img src="/logo.png" alt="Preview" width={200} height={200}/>
                        <div className="container">
                            <h4><b>{index}</b></h4>
                            <p>Возможно описание</p>
                            <Link href='/posts/player'>
                                <a>
                                    <button className="btn-primary">
                                        Смотреть
                                    </button></a>
                            </Link>
                        </div>
                    </div>
                </li>
            );
        }
        )
        return (
                <div id="project-comments" className="CardList">
                    <ul className="list-group">{commentNodes}</ul>
                </div>
            );
        }
    }

export class CardMain extends Component{
    handlePageClick = (data) => {
        console.log('onPageChange', data);
        let selected = data.selected;
        let offset = Math.ceil(selected * 9);

    };
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            offset: 0,
        };
    }

    render() {
        this.state.data = [1,2,3,4,5,6,7,8,9]
        return (
            <div className="CardBox">
                <CardList data={this.state.data}/>
                <MyPaginate
                    pageCount={10}
                    onPageChange={this.handlePageClick}
                    forcePage={0}
                />
            </div>
        );
    }
}