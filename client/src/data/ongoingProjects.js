import dummy1 from "../assets/images/1.png"
import dummy2 from "../assets/images/2.png"
import dummy3 from "../assets/images/3.png"
import dummy4 from "../assets/images/4.png"
import Gr1 from "../assets/images/Gr1.jpg"
import Gr2 from "../assets/images/Gr2.jpg"
import Gr3 from "../assets/images/Gr3.jpg"

const ongoingProject = [
    {
        "id": 1,
        "title": "GR PLAZA",
        "work_place": {
            "client": "Mr. Gnanasegaram",
            "projectValue": "Rs. 600 Million",
            "initiation": "Jun 01, 2023",
            "completion": "Oct 30, 2024",
            "supervisors": [
                { "name": "Gobishankar T."  },
                { "name": "Jayalakshan S." },
                { "name": "John Keshanth J."  },
                { "name": "Maheshika L." }
            ]
        },
        "address": "NO:406, Main street, Trincomalee",
        "images": [Gr1, Gr2, Gr3]
    },
    {
        "id": 2,
        "title": "Come home shop",
        "work_place": {
            "client": "---",
            "projectValue": "RS: 15 million",
            "initiation": "Mar 13, 2024",
            "completion": "Jul 13, 2024",
            "supervisors": [
                { "name": "Kirushna N.", }
            ]
        },
        "address": "---",
        "images": [dummy2, dummy1, dummy3, dummy4]
    },
    {
        "id": 3,
        "title": "EHED Caritas Foodcity, Food corner, Restvilla",
        "work_place": {
            "client": "---",
            "projectValue": "RS: 85 million",
            "initiation": "Nov 02, 2023",
            "completion": "Aug 01, 2024",
            "supervisors": [
                { "name": "Fawas Mohamed M."}
            ]
        },
        "address": "---",
        "images": [dummy2, dummy1, dummy3, dummy4]
    },
    {
        "id": 4,
        "title": "Navaladi Costruction Of Two Storied Boy's hostal building",
        "work_place": {
            "client": "Ar Thiyavadduvan",
            "projectValue": "---",
            "initiation": "Mar 03, 2024",
            "completion": "Jul 23, 2024",
            "supervisors": [
                { "name": "Shweedhan B."}
            ]
        },
        "address": "---",
        "images": [dummy2, dummy1, dummy3, dummy4]
    },
    {
        "id": 5,
        "title": "Renovation of director quarters DGH",
        "work_place": {
            "client": "---",
            "projectValue": "RS: 9.8 million",
            "initiation": "Jun 01, 2024",
            "completion": "Jul 31, 2024",
            "supervisors": [
                { "name": "Sajithkanth S." }
            ]
        },
        "address": "General Hospital, Trincomalee",
        "images": [dummy2, dummy1, dummy3, dummy4]
    },
    {
        "id": 6,
        "title": "Mathuram**",
        "work_place": {
            "client": "Mr. Satchithananthan",
            "projectValue": "RS: 19.7 million",
            "initiation": "Jul 12, 2024",
            "completion": "Nov 12, 2024",
            "supervisors": [
                { "name": "Arunraam J."}
            ]
        },
        "address": "---",
        "images": [dummy2, dummy1, dummy3, dummy4]
    },
    {
        "id": 7,
        "title": "Construction of Collecting and Packing Center at Pomegranate Cluster in Kaluwanchikudy Ds Division in Batticaloa",
        "work_place": {
            "client": "Ministry of Agriculture",
            "projectValue": "RS: 20 million",
            "initiation": "May 01, 2024",
            "completion": "Aug 30, 2024",
            "supervisors": [
                { "name": "Shweedhan B." }
            ]
        },
        "address": "Kaluwanchikudy, Batticaloa District",
        "images": [dummy2, dummy1, dummy3, dummy4]
    },
    {
        "id": 8,
        "title": "Balance Work of Construction of Store for Storing Agriculture Inputs. Machinery and Equipment in Karadiyanaru Batticaloa District",
        "work_place": {
            "client": "Ministry of Agriculture",
            "projectValue": "RS: 2.5 million",
            "initiation": "Oct 04, 2023",
            "completion": "Jul 01, 2024",
            "supervisors": [
                { "name": " Shweedhan B."}
            ]
        },
        "address": "Karadiyanaru, Batticaloa District",
        "images": [dummy2, dummy1, dummy3, dummy4]
    },
    {
        "id": 9,
        "title": "Nythianandam Home",
        "work_place": {
            "client": "Mr. Nythianandam",
            "projectValue": "RS: 25.5 million",
            "initiation": "Feb 27, 2024",
            "completion": "Jul 10, 2024",
            "supervisors": [
                { "name": "Mohamed Hashan"}
            ]
        },
        "address": "NO: 710, 10 Ehambaram Road, Murugapuri, Trincomalee",
        "images": [dummy2, dummy1, dummy3, dummy4]
    },
    {
        "id": 10,
        "title": "Manoj home",
        "work_place": {
            "client": "---",
            "projectValue": "RS: 15 million",
            "initiation": "Oct 01, 2023",
            "completion": "Aug 30, 2024",
            "supervisors": [
                { "name": "---"}
            ]
        },
        "address": "---",
        "images": [dummy2, dummy1, dummy3, dummy4]
    },
    {
        "id": 11,
        "title": "Thevakipillai Home",
        "work_place": {
            "client": "MRS. N.Thevakipillai",
            "projectValue": "RS: 60 million",
            "initiation": "Feb 12, 2024",
            "completion": "Nov 12, 2024",
            "supervisors": [
                { "name": "Vinojan P."},
                { "name": "Rachsuthan V."}
            ]
        },
        "address": "NO: 83 Arunagiri Street, Trincomalee",
        "images": [dummy2, dummy1, dummy3, dummy4]
    },
    {
        "id": 12,
        "title": "Chest Clinic - Stage 03",
        "work_place": {
            "client": "Department of Buildings",
            "projectValue": "RS: 22.5 million",
            "initiation": "Jun 07, 2024",
            "completion": "Oct 07, 2024",
            "supervisors": [
                { "name": "Sahan Randika"}
            ]
        },
        "address": "Manaiyaveli, Trincomalee",
        "images": [dummy2, dummy1, dummy3, dummy4]
    }
]

export default ongoingProject;
