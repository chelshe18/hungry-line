import React, { useState, useEffect, Component } from 'react';
import { FIREBASE_AUTH, db } from "../../firebase.config";
import { addDoc, collection, getDocs, onSnapshot } from 'firebase/firestore';
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";


export default function QueueCount() {
    const [queueSize, setQueueSize] = useState<number>(0)
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "current-line-queue"), (snapshot) => {
            setQueueSize(snapshot.size)
        })
        
    }, []);
    return(
        <Text>{queueSize}</Text>
    );
}
