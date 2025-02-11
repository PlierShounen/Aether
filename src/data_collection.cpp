#include <Arduino.h>
#include <DHT.h>
#include <Adafruit_Sensor.h>
#include <DHT_U.h>


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

#define DHTTYPE 11



void dhtData(){
DHT_Unified dht(DHTpin, DHTTYPE);
dht.begin();
sensors_event_t event;
Serial.print(event.temperature);
Serial.println(F("°C"));
Serial.print(event.relative_humidity);
Serial.println(F(" %"));
}

void vocData(){
  float data = analogRead(VOCpin);
  Serial.println(data);
}

void no2Data(){
  float data = analogRead(NO2pin);
  Serial.println(data);
}

void phData(){
  float data = analogRead(PHpin);
  Serial.println(data);
}

void moistData(){
  float data = analogRead(Moistpin);
  Serial.println(data);
}

// Array to hold the defined pin numbers
const int pins[NUM_PINS] = {
                                VOCpin, 
                                NO2pin, 
                                PHpin, 
                                Moistpin, 
                                DHTpin
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


    
    /*for(int i = 0; i < NUM_PINS; i++){
      Serial.print(sensor_names[i]);
      Serial.print(" + ");
      Serial.print(analogRead(pins[i]));
      Serial.println();
    }*/

}

