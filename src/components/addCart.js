import React, {useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import axios, {post} from "axios";
import {Snackbar, SnackbarContent, Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";

const AddCart = () => {
    const {ticketId} = useParams();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [addToCartSuccess, setAddToCartSuccess] = useState(false);

    const userId = sessionStorage.getItem('userId');
    console.log("User: ", userId);
    console.log(ticketId)
    const handleAddToCart = () => {
        const addToCartSuccess = false;
        axios.post(`http://localhost:8080/api/v1/user/addTicketToCart?userId=${userId}&ticketId=${ticketId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
        })
            .then(data => {
                console.log(data);
                setAddToCartSuccess(true)
                setOpenSnackbar(true);
            })
            .catch(error => {
                console.error('Eroare:', error);
                console.error('Error details:', error.response);
                setAddToCartSuccess(false);
                setOpenSnackbar(true);
            });
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleCloseConfirm = () => {
        handleClose();

    };

    return (
        <>
            <Dialog open={handleClickOpen} style={{
                backgroundColor: "#999"
            }}>

                <DialogTitle style={{
                    backgroundColor: "#111",
                    color: "#999",
                    textAlign: "center"
                }}> {"Are you sure you want to add this ticket to your cart?"}
                </DialogTitle>
                <DialogContent style={{backgroundColor: "#111"}}>
                    <DialogActions>
                        <div
                            style={{backgroundColor: 'transparent', textAlign: "center"}}
                            className="tickets"
                            onClick={handleAddToCart}
                        >
                            <Link style={{color: "#999"}} to={`/addCart/${userId}/${ticketId}`}>Add</Link>
                        </div>
                    </DialogActions>
                </DialogContent>
            </Dialog>
            <Snackbar
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                open={openSnackbar}
                autoHideDuration={3000} // Durata de afișare în milisecunde
                onClose={handleCloseSnackbar}
            >
                <SnackbarContent
                    style={{
                        backgroundColor: addToCartSuccess ? '#4CAF50' : '#FF5733', // Verde pentru succes, Rosu pentru esec
                        color: '#fff',
                        textAlign: 'center',
                    }}
                    message={addToCartSuccess ? 'Ticket added to cart!' : 'Failed to add ticket to cart!'}
                />
            </Snackbar>
        </>

    );
};

export default AddCart;
