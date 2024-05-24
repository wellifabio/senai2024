import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const BASE_URL = "http://gateway.marvel.com/v1/public/characters";
const API_KEY = "0167ae07e1079d3c973de33079c49a73";
const HASH = "703e74da1bb0eeb0c343fcf0b2728b4255a1c3df";
