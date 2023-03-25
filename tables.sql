--
-- PostgreSQL database dump
--

-- Dumped from database version 14.7 (Ubuntu 14.7-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.7 (Ubuntu 14.7-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cakes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cakes (
    id_cake integer NOT NULL,
    name character varying(30),
    price numeric(10,0),
    image character varying(120),
    description text
);


--
-- Name: cakess_id_cake_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cakess_id_cake_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cakess_id_cake_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cakess_id_cake_seq OWNED BY public.cakes.id_cake;


--
-- Name: clients; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.clients (
    id_client integer NOT NULL,
    name character varying(30),
    address character varying(60),
    phone character varying(11)
);


--
-- Name: clientss_id_client_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.clientss_id_client_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: clientss_id_client_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.clientss_id_client_seq OWNED BY public.clients.id_client;


--
-- Name: orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orders (
    id_order integer NOT NULL,
    "cakeId" integer,
    "clientId" integer,
    quantity integer,
    "createdAt" timestamp with time zone NOT NULL,
    "totalPrice" numeric
);


--
-- Name: orderss_id_order_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.orderss_id_order_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: orderss_id_order_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.orderss_id_order_seq OWNED BY public.orders.id_order;


--
-- Name: cakes id_cake; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cakes ALTER COLUMN id_cake SET DEFAULT nextval('public.cakess_id_cake_seq'::regclass);


--
-- Name: clients id_client; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.clients ALTER COLUMN id_client SET DEFAULT nextval('public.clientss_id_client_seq'::regclass);


--
-- Name: orders id_order; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders ALTER COLUMN id_order SET DEFAULT nextval('public.orderss_id_order_seq'::regclass);


--
-- Data for Name: cakes; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cakes VALUES (1, 'bolo de banana', 27, 'https://google.com', 'bolo feito com banana e calda dde chocolate');
INSERT INTO public.cakes VALUES (2, 'bolo de chocolate', 35, 'https://google.com', 'bolo de chocolate e calda dde chocolate');


--
-- Data for Name: clients; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.clients VALUES (1, 'ludmila', 'Rua Antonia', '48991339151');
INSERT INTO public.clients VALUES (2, 'carla', 'Rua Maria', '123');
INSERT INTO public.clients VALUES (3, 'luana', 'Rua Carlos', '1234567891');


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.orders VALUES (4, 2, 2, 3, '2023-03-24 15:32:16.246-03', 48);
INSERT INTO public.orders VALUES (5, 1, 5, 3, '2023-03-24 15:33:28.257-03', 58);
INSERT INTO public.orders VALUES (6, 1, 1, 2, '2023-03-24 16:10:45.939-03', 28);
INSERT INTO public.orders VALUES (7, 1, 2, 2, '2023-03-24 16:12:02.244-03', 68);
INSERT INTO public.orders VALUES (8, 1, 2, 2, '2023-03-24 17:37:00.086-03', 68);


--
-- Name: cakess_id_cake_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cakess_id_cake_seq', 34, true);


--
-- Name: clientss_id_client_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.clientss_id_client_seq', 3, true);


--
-- Name: orderss_id_order_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.orderss_id_order_seq', 8, true);


--
-- Name: cakes cakess_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cakes
    ADD CONSTRAINT cakess_pkey PRIMARY KEY (id_cake);


--
-- Name: clients clientss_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clientss_pkey PRIMARY KEY (id_client);


--
-- Name: orders orderss_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orderss_pkey PRIMARY KEY (id_order);


--
-- PostgreSQL database dump complete
--
