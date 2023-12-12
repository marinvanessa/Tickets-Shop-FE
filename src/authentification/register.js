import React from 'react';
import '@material-ui/core';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField
} from "@material-ui/core";
import authenticationService from "../service/authenticationService";



export default function Register() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseConfirm = () => {
        authenticationService.registerUser(document.getElementById('firstName').value,
            document.getElementById('lastName').value,
            document.getElementById('email').value,
            document.getElementById('username').value,
            document.getElementById('password').value,
        );
        handleClose()
    };

    return (
        <div className={"register-main-page"}>
            <Button onClick={handleClickOpen} className={"register-button"} variant={"text"}>
                Sign Up
            </Button>
            <Dialog className={"dialog-box"}
                    style={{
                        backgroundColor: "#204b5e",
                    }}
                    open={open} onClose={handleClose}>
                <DialogTitle className={"title-register"}
                             style={{
                                 backgroundColor: "#baab6a",
                                 color: "#204b5e",
                                 borderBottom: "2px solid #204b5e",
                                 textAlign: "center",
                             }}>
                    Register</DialogTitle>
                <DialogContent
                    style={{
                        width:"400px",
                        height: "500px",
                        backgroundColor: "#baab6a"
                    }}
                    className={"dialog-center"}>
                    <TextField
                        style ={{
                            marginTop: "10px"
                        }}
                        id={"firstName"}
                        autoFocus={true}
                        label={"First Name:"}
                        type={"text"}
                        fullWidth={true}
                        InputLabelProps={{
                            style: {
                                color: "#204b5e",
                                fontSize: "14px",
                                fontFamily: "Hervetica"
                            }
                        }}/>

                    <TextField
                        style ={{
                            marginTop: "10px"
                        }}
                        id={"lastName"}
                        autoFocus={true}
                        label={"Last Name:"}
                        type={"text"}
                        fullWidth={true}
                        InputLabelProps={{
                            style: {
                                color: "#204b5e",
                                fontSize: "14px",
                                fontFamily: "Hervetica"
                            }
                        }}/>

                    <TextField
                        style ={{
                            marginTop: "10px"
                        }}
                        id={"email"}
                        autoFocus={true}
                        label={"Email:"}
                        type={"email"}
                        fullWidth={true}
                        InputLabelProps={{
                            style: {
                                color: "#204b5e",
                                fontSize: "14px",
                                fontFamily: "Hervetica"
                            }
                        }}/>

                    <TextField
                        style ={{
                            marginTop: "10px"
                        }}
                        id={"username"}
                        autoFocus={true}
                        label={"Username:"}
                        type={"text"}
                        fullWidth={true}
                        InputLabelProps={{
                            style: {
                                color: "#204b5e",
                                fontSize: "14px",
                                fontFamily: "Hervetica"
                            }
                        }}/>

                    <TextField
                        style ={{
                            marginTop: "10px"
                        }}
                        id={"password"}
                        autoFocus={true}
                        label={"Password:"}
                        type={"password"}
                        helperText={"Password must have at least 8 characters."}
                        fullWidth={true}
                        InputLabelProps={{
                            style: {
                                color: "#204b5e",
                                fontSize: "14px",
                                fontFamily: "Hervetica"
                            }
                        }}/>
                </DialogContent>

                <DialogActions
                    style={{
                        backgroundColor: "#baab6a"
                    }}>
                    <Button
                        style={{
                            backgroundColor: "#204b5e",
                            color: "#baab6a",
                            height: "30px",
                        }}
                        className={"button-send"}
                        onClick={handleCloseConfirm}>
                        Send</Button>
                    <Button
                        style={{
                            backgroundColor: "#204b5e",
                            color: "#baab6a",
                            height: "30px"
                        }}
                        className={"button-cancel"}
                        onClick={handleClose}>
                        Cancel</Button>

                </DialogActions>
            </Dialog>

        </div>
    )
}