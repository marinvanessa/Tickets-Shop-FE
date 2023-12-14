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
        <Button className={"logout-btn"} onClick={handleClickOpen}
                style={{
                    textTransform: "none",
                    color: "#baab6a",
                    alignItems: "center",
                    border: "2px solid #baab6a"
                }}>
            Logout
        </Button>
        <Dialog open={open}
                style={{
                    backgroundColor: "#204b5e"
                }}
                onClose={handleClose}>
            <DialogTitle style={{
                backgroundColor: "#baab6a",
                color: "#204b5e",
                textAlign: "center"
            }}>
                {"Are you sure you want to log out?"}</DialogTitle>
            <DialogContent style={{backgroundColor: "#baab6a"}}>
                <DialogActions>
                    <Button style={{
                        textTransform: "none",
                        color: "#204b5e"
                    }}
                            onClick={handleCloseConfirm}>Yes</Button>
                    <Button style={{
                        textTransform: "none",
                        color: "#204b5e"
                    }}
                            onClick={handleClose}>No</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
        </body>
    );
}