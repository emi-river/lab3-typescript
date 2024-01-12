"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
dotenv_1.default.config();
const client = new pg_1.Client({
    connectionString: process.env.PGURI
});
client.connect();
app.get('/movies', (_request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows } = yield client.query('SELECT * FROM movies');
        response.send(rows);
    }
    catch (error) {
        console.error('Error fetching movies:', error);
        response.status(500).send('Internal Server Error');
    }
}));
app.post('/movies', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, genre, img, rating, description } = request.body;
        console.log(name);
        yield client.query('INSERT INTO movies(name, genre, img, rating, description) VALUES ($1, $2, $3, $4, $5);', [name, genre, img, rating, description]);
        const { rows } = yield client.query('SELECT * FROM movies');
        console.log(rows);
        response.status(200).send(rows);
    }
    catch (error) {
        console.error('Error inserting movie:', error);
        response.status(500).send('Internal Server Error');
    }
}));
app.use(express_1.default.static(path_1.default.join(path_1.default.resolve(), 'public')));
app.listen(port, () => {
    console.log(`http://localhost:${port} is live!`);
});
