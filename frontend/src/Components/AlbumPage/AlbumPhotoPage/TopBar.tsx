import React, { useState } from "react";
import "./TopBar.css";
import IconButton from "@material-ui/core/IconButton";
import { CloudDownload, LibraryAdd, Delete, Cancel, CloudUpload, Settings, Search, CheckBox, RemoveCircleOutline } from "@material-ui/icons";
import SearchBar from "material-ui-search-bar";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

function RightSelectDiv(props: { buttonFunctions: any }) {
    return (
        <div className="right">
            <IconButton className="IconButton" color="primary" aria-label="cancel" onClick={props.buttonFunctions.unselect}>
                <Cancel />
            </IconButton>
            <IconButton className="IconButton" color="primary" aria-label="cloud_download">
                <CloudDownload />
            </IconButton>
            <IconButton className="IconButton" color="primary" aria-label="library_add" onClick={props.buttonFunctions.addToAlbum}>
                <LibraryAdd />
            </IconButton>
            <IconButton className="IconButton" color="primary" aria-label="remove" onClick={props.buttonFunctions.remove}>
                <RemoveCircleOutline />
            </IconButton>
            <IconButton className="IconButton" color="primary" aria-label="delete" onClick={props.buttonFunctions.delete}>
                <Delete />
            </IconButton>
        </div>
    );
}
function RightNonSelectDiv(props: { buttonFunctions: any }) {
    return (
        <div className="right">
            <IconButton className="IconButton" color="primary" aria-label="upload" onClick={props.buttonFunctions.upload}>
                <CloudUpload />
            </IconButton>
            <IconButton className="IconButton" color="primary" aria-label="settings" onClick={props.buttonFunctions.settings}>
                <Settings />
            </IconButton>
        </div>
    );
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        TopBar: {
            "grid-area": "TopBar",
            background: "#ffffff",
            display: "grid",
            "grid-template-columns": "1fr 1fr",
            [theme.breakpoints.down("sm")]: {
                "grid-template-columns": "0fr 1fr",
            },
            "grid-template-rows": "1fr",
            gap: "0px 0px",
            gridTemplateAreas: '"middle right"',
            width: "100vw",
        },
        middle: {
            display: "block",
            width: "40vw",
            [theme.breakpoints.down("sm")]: {
                display: "none",
            },
            "grid-area": "middle",
            "padding-top": "8px",
        },
        searchMobile: {
            [theme.breakpoints.up("md")]: {
                display: "none",
            },
            transition: "all 1s linear",
            padding: "7px",
            display: "block",
            float: "right",
            "margin-right": "-15px",
            "padding-right": "0px",
        },
        right: {
            transition: "all 1s linear",
            padding: "7px",
            display: "block",
            float: "right",
            "margin-right": "-15px",
            "padding-right": "0px",
        },
        selectMobile: {
            [theme.breakpoints.up("md")]: {
                display: "none",
            },
            transition: "all 1s linear",
            padding: "7px",
            display: "block",
            float: "right",
            "margin-right": "-15px",
            "padding-right": "0px",
        },
    })
);

export default function TopBar(props: any) {
    const classes = useStyles();

    return (
        <div className={classes.TopBar}>
            <div className={classes.middle}>
                <SearchBar value="" onChange={() => {}} onRequestSearch={() => {}} />
            </div>
            <div className="rightHolder">
                {props.anySelected() ? <RightSelectDiv buttonFunctions={props.buttonFunctions} /> : <RightNonSelectDiv buttonFunctions={props.buttonFunctions} />}

                {props.anySelected() || (
                    <div className={classes.selectMobile}>
                        <IconButton className="IconButton" color="primary" aria-label="select" onClick={props.buttonFunctions.select}>
                            <CheckBox />
                        </IconButton>
                    </div>
                )}
                <div className={classes.searchMobile}>
                    <IconButton className="IconButton" color="primary" aria-label="search" onClick={props.buttonFunctions.settings}>
                        <Search />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}