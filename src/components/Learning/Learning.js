import React from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import preloader from "../../data/preloader.gif";
import "./Learning.css"


const Learning = ({ LightMode }) => {
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('super', 'the best thing', 'excellent', 'other'),
        createData('fake', 'false news', 'bad', 'others'),
        createData('goods', 'vagetables', 'excellent', 'other'),
        createData('কলা', 'এক প্রকার সবজি', 'সব্জি', 'ভিটামিন'),
        createData('supasdfer', 'thsdf thing', 'excelsdfent',),
        createData('sudfper', 'the fdfdfest dfdfdfdfdfdfdsdfsffing', 'excdfnt', 'otdfher'),
        createData('Icdfsdfsdwich', 'the fdfdfesdfgfd dfgf sdsfdfdfdfdfdfdsdfsffing', 'excdfnt', 'otdfher')
    ];

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
                                style={{ color: LightMode ? "black" : "white" }} >Synonyms
                             </TableCell>
                            <TableCell
                                style={{ color: LightMode ? "black" : "white" }} align="right">Others</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell
                                        component="th" scope="row"
                                        style={{ color: LightMode ? "black" : "white" }}>
                                        {count++}. {row.name}
                                    </TableCell>
                                    <TableCell
                                        style={{ color: LightMode ? "black" : "white" }} align="center">{row.calories}
                                    </TableCell>
                                    <TableCell
                                        style={{ color: LightMode ? "black" : "white" }} align="right">{row.fat}
                                    </TableCell>
                                    <TableCell
                                        style={{ color: LightMode ? "black" : "white" }} align="right">{row.carbs}
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default Learning;