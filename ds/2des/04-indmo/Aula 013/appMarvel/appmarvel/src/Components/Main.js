import React, {useState, useEffect} from "react";
import {Card} from "./Card";
import axios from "axios";
import { serialize } from "v8";

const BASE_URL = "http://gateway.marvel.com/v1/public/characters";
const API_KEY = "0167ae07e1079d3c973de33079c49a73";
const HASH = "703e74da1bb0eeb0c343fcf0b2728b4255a1c3df";

export const Main = () => {
    const [item, setItem] = useState([]);
    const [search, setSearch] = useState("");

    const fetchCharacters = async (url) => {
        try{
            const res = await axios.get(url);
            setItem(res.data.data.results);
        } catch (error){
            console.error("Erro ao buscar dados", error);
        }
        };

        useEffect(() => {
            const ts = Date.now();
            const initialUrl = `${BASE_URL}?ts=${ts}&apikey=${API_KEY}&hash=${HASH}`;
            fetchCharacters(initialUrl);
        },[]);

        const searchMarvel = (e) => {
            if(e.key === "Enter"){
                const ts = Date.now();
                const searchUrl = `${BASE_URL}?nameStartsWith=${search}&ts=${ts}&apikey${API_KEY}&hash=${HASH}`;
                fetchCharacters(searchUrl);
            }
        };

        return (
            <>
            <div className = "header">
                <div className="bg">
                    <img src="./Images/bg.gif" alt="" />
                </div>
                <br></br>
                <div className="search-bar">
                    <img classname="logo" src="./Images/logo.png" alt="logo" />
                    <p> </p>
                    <input
                    type="search"
                    placeholder="Procurar Herói"
                    className="search"
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={searchMarvel}
                    />
                </div>
            </div>
            <div className="content">
                {!item.length ? <p>Não Encontrado</p> : <Card data={item} />}
            </div>
            </>
        );
}
