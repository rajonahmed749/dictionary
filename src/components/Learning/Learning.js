import React from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const Learning = ({ LightMode }) => {
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('super', 'the best thing', 'excellent', 'other'),
        createData('fake', 'false news', 'bad', 'others'),
        createData('goods', 'vagetables', 'excellent', 'other'),
        createData('supasdfer', 'thsdf thing', 'excelsdfent', 'odsfer'),
        createData('sudfper', 'the fdfdfest dfdfdfdfdfdfdsdfsffing', 'excdfnt', 'otdfher'),
        createData('Icdfsdfsdwich', 'the fdfdfesdfgfd dfg dfg fg dfg dfg df sdfg dfg sdf dfg  sdg sdfg s dsf dsf df d dft ddsfdsfdfdfdfdfdfdsdfsffing', 'excdfnt', 'otdfher')
    ];
    return (
        <Container >
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
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell
                                    component="th" scope="row"
                                    style={{ color: LightMode ? "black" : "white" }}>
                                    {row.name}
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
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default Learning;