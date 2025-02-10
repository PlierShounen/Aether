#include <Arduino.h>
#include <DHT.h>


/* 
sensors to be used : 
NO2 : NO2 Sensor  -- analog
VOC : VOC Sensor -- analog
Soil pH : pH sensor -- analog sensor
Soil Moisture : soil moisture sensor -- 
Temperature and Humidity : DHT Sensor
*/

#define NUM_PINS 5

#define VOCpin 1
#define NO2pin 2
#define PHpin 3
#define Moistpin 4
#define DHTpin 5


// Array to hold the defined pin numbers
const int pins[NUM_PINS] = {
                                VOCpin, 
                                NO2pin, 
                                PHpin, 
                                Moistpin, 
                                DHTpin
                           };


const char *sensor_names[] = {
                                "VOC",
                                "NO2",
                                "pH", 
                                "Moisture",
                               "Temperaure", 
                               "Humidity"
                            };


// Function to set all pins to output and pulled down
void setAll(int mode){
  for(int i = 0; i < NUM_PINS; i++){
    pinMode(pins[i], mode);
    digitalWrite(pins[i], LOW);
  }
}


void setup() {
  setAll(INPUT);  
  Serial.begin(9600);
}

void loop() {
    
    for(int i = 0; i < NUM_PINS; i++){
      Serial.print(sensor_names[i]);
      Serial.print(" + ");
      Serial.print(analogRead(pins[i]));
      Serial.println();
    }

}

