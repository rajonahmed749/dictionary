import React, { useContext, useState, useEffect } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import preloader from "../../data/preloader.gif";
import "./Learning.css"
import { UserContext } from '../../App';


const Learning = ({ LightMode }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [words, setWords] = useState([])
    const id = loggedInUser.email;
    
    useEffect(() => {
        fetch(`https://mysterious-ridge-35734.herokuapp.com/getWords/${id}`)
            .then(res => res.json())
            .then(data => {
                setWords(data)
                if (data) {
                    document.getElementById('preloader').style.display = 'none'
                }
            });
    }, [])

    let count = 1;
    return (
        <Container >
            <div className="addWord">
                <h3>Your word summary <i style={{ color: LightMode ? "black" : "white" }} className="fas fa-sort-alpha-down fa-lg"></i>
                </h3>
            </div>
            <div className="addWord">
                <img id="preloader" src={preloader} alt="preloader" />
            </div>

            <TableContainer >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <TableCell
                                style={{ color: LightMode ? "black" : "white" }}>Words
                             </TableCell>
                            <TableCell
                                style={{ color: LightMode ? "black" : "white" }} align="center">Meaning</TableCell>
                            <TableCell
                                style={{ color: LightMode ? "black" : "white" }} align="right">Synonyms
                             </TableCell>
                            <TableCell
                                style={{ color: LightMode ? "black" : "white" }} align="right">Added by</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            words.map(word => {
                                return (
                                    <TableRow key={word._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row"
                                            style={{ color: LightMode ? "black" : "white" }}>
                                            {count++}. <span className="word">{word.word}</span>
                                        </TableCell>
                                        <TableCell
                                            style={{ color: LightMode ? "black" : "white" }} align="center">{word.wordMean}
                                        </TableCell>
                                        <TableCell
                                            style={{ color: LightMode ? "black" : "white" }} align="right">{word.synonym}
                                        </TableCell>
                                        <TableCell
                                            style={{ color: LightMode ? "black" : "white" }} align="right">{word.user}
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default Learning;