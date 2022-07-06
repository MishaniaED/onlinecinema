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
                <PaginatedItems itemsPerPage={4} />,
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

        /*this.setState({ offset: offset }, () => {
            this.loadCommentsFromServer();
        });*/
    };
    constructor(props) {
        super(props);

        this.state = {
            data: [1,2,3,4,5,6,7,8,9,10,11,12,13],
            offset: 0,
        };
    }
        /*render(){
            return(
                <CardList/>
                <nav>

                </nav>
                /!*<ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={4}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                />*!/
            );
        }*/
    render() {
        this.state.data = [1,2,3,4,5,6,7,8,9,10,11,12,13]
        return (
            <div className="commentBox">
                <MyPaginate
                pageCount={20}
                onPageChange={this.handlePageClick}
                forcePage={1}
                />
                <CardList data={this.state.data}/>

                <nav aria-label="Page navigation comments" className="mt-4">
                    <ReactPaginate
                        /*nextLabel="next"*/

                        /*previousLabel="previous"
                        nextLabel="next"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        pageCount={20}
                        pageRangeDisplayed={4}
                        marginPagesDisplayed={2}
                        onPageChange={this.handlePageClick}
                        containerClassName="pagination justify-content-center"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        activeClassName="active"
                        // eslint-disable-next-line no-unused-vars
                        hrefBuilder={(page, pageCount, selected) =>
                            page >= 1 && page <= pageCount ? `/page/${page}` : '#'
                        }
                        hrefAllControls
                        forcePage={currentPage}
                        onClick={(clickEvent) => {
                            console.log('onClick', clickEvent);*/

                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        onPageChange={this.handlePageClick}
                        pageRangeDisplayed={4}
                        pageCount={9}
                        containerClassName="pagination justify-content-center"
                        /*previousLabel="< previous"*/
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                        onClick={(clickEvent) => {
                            console.log('onClick', clickEvent);
                        }}
                        hrefBuilder={(page, pageCount, selected) =>
                            page >= 1 && page <= pageCount ? `/page/${page}` : '#'
                        }
                        hrefAllControls
                    />
                </nav>
            </div>
        );
    }
}