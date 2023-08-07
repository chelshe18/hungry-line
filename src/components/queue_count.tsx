import React, { useState, useEffect } from 'react';
import { db } from "../../firebase.config";
import { collection, onSnapshot } from 'firebase/firestore';
import { Text } from "react-native";


export default function QueueCount() {
    const [queueSize, setQueueSize] = useState<number>(0)
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "queue"), (snapshot) => {
            setQueueSize(snapshot.size)
        })
        
    }, []);
    return queueSize;
}
