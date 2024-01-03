import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";


export default function GetDino() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dinosList, setDinosList] = useState([]);

  useEffect(() => {
    fetch(`https://localhost:5001/api/animals/`)
      .then(response => response.json())
      .then((jsonifiedResponse) => {
          setDinosList(jsonifiedResponse)
          setIsLoaded(true)
        })
      .catch((error) => {
        setError(error)
        setIsLoaded(true)
      });
    }, [])


    if (error) {
      return <h1>Error: {error}</h1>;
    } else if (!isLoaded) {
      return <h1>...Loading...</h1>;
    } else {
      return (
        <View>
          <Text style={styles.text}>
            <h1>Dinos available</h1>
            <ul>
              {Object.values(dinosList).map((dinosaur) =>
                <li key={dinosaur.animalId}>
                <h3>Name: {dinosaur.name}</h3>
                <p>Species: {dinosaur.species}</p>
                <p>Age: {dinosaur.age}</p>
                </li>
              )}
          </ul>
          </Text>
        </View>
        )
      }
    }

    const styles = StyleSheet.create({
    
      text: {
        fontSize: 20,
        color: 'red',
      }
    });