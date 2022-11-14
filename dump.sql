--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

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
-- Name: meetings; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.meetings (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    date date NOT NULL,
    hour time without time zone NOT NULL
);


--
-- Name: meetings_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.meetings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: meetings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.meetings_id_seq OWNED BY public.meetings.id;


--
-- Name: meetingservice; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.meetingservice (
    id integer NOT NULL,
    "meetingId" integer NOT NULL,
    "serviceId" integer NOT NULL
);


--
-- Name: meetingservice_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.meetingservice_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: meetingservice_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.meetingservice_id_seq OWNED BY public.meetingservice.id;


--
-- Name: services; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.services (
    id integer NOT NULL,
    name character varying(250) NOT NULL,
    price integer NOT NULL
);


--
-- Name: services_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.services_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: services_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.services_id_seq OWNED BY public.services.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(250) NOT NULL,
    cell bigint NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: meetings id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.meetings ALTER COLUMN id SET DEFAULT nextval('public.meetings_id_seq'::regclass);


--
-- Name: meetingservice id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.meetingservice ALTER COLUMN id SET DEFAULT nextval('public.meetingservice_id_seq'::regclass);


--
-- Name: services id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.services ALTER COLUMN id SET DEFAULT nextval('public.services_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: meetings; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.meetings VALUES (1, 1, '2022-11-15', '15:30:00');
INSERT INTO public.meetings VALUES (2, 2, '2022-11-15', '14:30:00');
INSERT INTO public.meetings VALUES (4, 7, '2022-12-15', '11:30:00');


--
-- Data for Name: meetingservice; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.meetingservice VALUES (1, 1, 3);
INSERT INTO public.meetingservice VALUES (2, 2, 5);
INSERT INTO public.meetingservice VALUES (4, 4, 2);


--
-- Data for Name: services; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.services VALUES (1, 'pintar unhas do pé', 2550000);
INSERT INTO public.services VALUES (2, 'pintar unhas da mão', 2550000);
INSERT INTO public.services VALUES (3, 'pintar cabelo', 5990000);
INSERT INTO public.services VALUES (4, 'sombrancelha', 1550000);
INSERT INTO public.services VALUES (5, 'maquiagem', 3990000);
INSERT INTO public.services VALUES (10, 'depilação bulso', 1500000);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'joana', 79996962323);
INSERT INTO public.users VALUES (2, 'zezinho', 79996967525);
INSERT INTO public.users VALUES (3, 'zezinho', 79996967525);
INSERT INTO public.users VALUES (4, 'aninha', 79940028922);
INSERT INTO public.users VALUES (5, 'aninha', 79940028922);
INSERT INTO public.users VALUES (6, 'zé gotinha', 79996200201);
INSERT INTO public.users VALUES (7, 'zé gotinha filho', 79996200201);
INSERT INTO public.users VALUES (8, 'maquiagem', 7999897557);
INSERT INTO public.users VALUES (9, 'maquiagem', 7999897557);
INSERT INTO public.users VALUES (10, 'mariazinha', 79999897557);
INSERT INTO public.users VALUES (11, 'mariazinha 2', 79999897557);
INSERT INTO public.users VALUES (12, 'mariazinha 3', 79999897557);
INSERT INTO public.users VALUES (13, 'mariazinha 4', 79999897557);
INSERT INTO public.users VALUES (14, 'mariazinha 5', 79999897557);
INSERT INTO public.users VALUES (15, 'depilação bulso', 79999897557);
INSERT INTO public.users VALUES (16, 'angolano', 44);
INSERT INTO public.users VALUES (17, 'angolano', 44);
INSERT INTO public.users VALUES (18, 'angolano', 44);
INSERT INTO public.users VALUES (19, 'an', 44);
INSERT INTO public.users VALUES (20, 'ola mundo', 799);
INSERT INTO public.users VALUES (21, 'ola mundo', 799);
INSERT INTO public.users VALUES (22, 'ola mundo', 799);
INSERT INTO public.users VALUES (23, 'ola mundo', 799);
INSERT INTO public.users VALUES (24, 'ola mundo', 799);
INSERT INTO public.users VALUES (25, 'ola mundo', 799);
INSERT INTO public.users VALUES (26, 'ola mundo', 799);
INSERT INTO public.users VALUES (27, 'ola mundo', 799);
INSERT INTO public.users VALUES (28, 'ola mundo', 799);
INSERT INTO public.users VALUES (29, 'ola mundo', 799);
INSERT INTO public.users VALUES (30, 'Aninha', 79996858986);


--
-- Name: meetings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.meetings_id_seq', 4, true);


--
-- Name: meetingservice_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.meetingservice_id_seq', 4, true);


--
-- Name: services_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.services_id_seq', 10, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 30, true);


--
-- Name: meetings meetings_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.meetings
    ADD CONSTRAINT meetings_pkey PRIMARY KEY (id);


--
-- Name: meetingservice meetingservice_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.meetingservice
    ADD CONSTRAINT meetingservice_pkey PRIMARY KEY (id);


--
-- Name: services services_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.services
    ADD CONSTRAINT services_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: meetings meetings_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.meetings
    ADD CONSTRAINT "meetings_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: meetingservice meetingservice_meetingId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.meetingservice
    ADD CONSTRAINT "meetingservice_meetingId_fkey" FOREIGN KEY ("meetingId") REFERENCES public.meetings(id);


--
-- Name: meetingservice meetingservice_serviceId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.meetingservice
    ADD CONSTRAINT "meetingservice_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES public.services(id);


--
-- PostgreSQL database dump complete
--

