import { auth, db } from "@/backend/firebase"; // Adjust based on your project structure
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import {IsAdmin} from '@/backend/auth'
import Navbar from '@/components/Dashboard/Navbar';
import { fetchCollectionData } from "@/backend/Database";
import styled from 'styled-components';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from 'next/router'
    

const AdminPage = () => {
    const [BooleanAdmin, setBooleanAdmin] = useState(false);
    const [database, setDatabasedata] = useState(true);
    const [loading, setLoading] = useState(true);
    const [searchterm, setsearchterm] = useState('');
    const [loggedIn, setLoggedIn] = useState(false); 
    const router = useRouter();


    const getData = async (searchterm) => {
        const result = await fetchCollectionData(`${searchterm}`); // Replace with actual collection name
        setDatabasedata(result);
        setLoading(false);
    };

    const handleSearch = () => {
        getData(searchterm); // Pass the search term to fetch function
        
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                console.log("User is logged in:", user.email);
                setLoggedIn(true);

                try {
                    const isAdminUser = await IsAdmin(); // Check admin status
                    setBooleanAdmin(isAdminUser);
                    console.log("Admin status:", isAdminUser);
                    
                    if (!isAdminUser) { // If not an admin, redirect
                        alert("You are not an admin! Log in with an administrator account! Returning to dashboard.");
                        router.push("/");
                    }
                } catch (error) {
                    console.error("🔥 Firebase Error:", error.message);
                    alert("An error occurred while verifying admin status. Redirecting...");
                    router.push("/");
                }

            } else {
                console.log("User not logged in.");
                setLoggedIn(false);
                setBooleanAdmin(false); // Reset admin state
                alert("You are not logged in! Log in first! Returning to dashboard.");
                router.push("/");
            }
        });

        return () => unsubscribe(); // Cleanup listener

    }, []);
    
return (
    
    <Pardiv>
    <Navbar/>
    <PageDiv>
    {BooleanAdmin ? <p>You are an admin!</p> : <p>Access Denied</p>}
    <DropdownContainer>
    
    

    <ComboBox value={searchterm} onChange={(e) => setsearchterm(e.target.value)}>
                <Option value="">-- Select --</Option>
                <Option value="GPT-messages">GPT-messages</Option>
                <Option value="contact-messages">Contact Messages</Option>
            </ComboBox>
    
    </DropdownContainer>
    <button onClick={handleSearch}>Search</button>
    {loading ? (
                <p>Loading...</p>
            ) : database.length > 0 ? (
                database.map((item, index) => (
                    <StyledMessage key={index}>{item.message?.message || "No message available"}</StyledMessage>
                ))
            ) : (
                <p>No data found.</p>
            )}
    
    </PageDiv>
    </Pardiv>
);
};

const DropdownContainer = styled.div`
  display: ;
  justify-content: center;
  margin-top: 20px;
  position: relative;
  z-index: 2; /* Prevents it from overlapping */
`;


const Pardiv = styled.div`
text-align: center;
width: 100%;
display: inline-block;
height: 100vh;
justify-content: center;


`;

const StyledMessage = styled.p`
font-size: 16px;
color: #333;
background-color: #f9f9f9;
padding: 10px;
border-radius: 5px;
margin-bottom: 10px;
max-width: 600px;
word-wrap: break-word;
white-space: normal;
border: 5px solid #ddd;

`

const PageDiv = styled.div`
display:flex;
justify-content: center;
align-items: center;
height: 100vh;
flex-grow:1;
flex-direction: column;
overflow-y: auto;
gap:15px;
`

const ComboBox = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  max-width: 300px;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Option = styled.option`
  font-size: 16px;
  padding: 10px;
`;


export default AdminPage;