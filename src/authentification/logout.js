import React, {useState} from 'react';
import {Button} from "@material-ui/core";
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import {useNavigate} from "react-router-dom";

export default function Logout() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseConfirm = () => {
        sessionStorage.clear();
        handleClose();
        navigate('/');

    };

    return (
        <body className={"logout-body"}>
        <Button className={"floating-button-container"} onClick={handleClickOpen}
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    textTransform: "none",
                    color: "#111",
                    alignItems: "center",
                    border: "2px solid #111"
                }}>
            Logout
        </Button>
        <Dialog open={open}
                style={{
                    backgroundColor: "#999"
                }}
                onClose={handleClose}>
            <DialogTitle style={{
                backgroundColor: "#111",
                color: "#999",
                textAlign: "center"
            }}>
                {"Are you sure you want to log out?"}</DialogTitle>
            <DialogContent style={{backgroundColor: "#111"}}>
                <DialogActions>
                    <Button style={{
                        textTransform: "none",
                        color: "#999"
                    }}
                            onClick={handleCloseConfirm}>Yes</Button>
                    <Button style={{
                        textTransform: "none",
                        color: "#999"
                    }}
                            onClick={handleClose}>No</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
        </body>
    );
}