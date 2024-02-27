//Select the element
const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDischargingTime = document.querySelector(".batteryDischargingTime");

// Battery API
const battery = () => {
   if("getBattery" in navigator){
    navigator.getBattery().then(battery => {
        function updateAllBatteryDetails(){
            updateChargingInfo();
            updateLevelChange();
            updateDischargingTimeInfo();
            updateChargingTimeChangeInfo()
        }
        updateAllBatteryDetails();

        //Battery Charging Change
        battery.addEventListener("chargingchange",() =>{
            updateChargingInfo()
          });
          function updateChargingInfo(){
             const isCharging = battery.charging ? 'Yes': 'No';
             batteryCharging.innerHTML =isCharging;
          }
 

        //Battery Charging Time
        battery.addEventListener("chargingtimechange",() =>{
            updateChargingTimeChangeInfo();
         });
         function updateChargingTimeChangeInfo(){
          // console.log(battery.chargingTime);
           batteryChargingTime.innerHTML = battery.chargingTime + " seconds";
         }

        //Battery  Discharging Time
        battery.addEventListener("dischargingtime", () =>{
           updateDischargingTimeInfo();
        });
        function updateDischargingTimeInfo(){
           // console.log(battery.dischargingTime);
            batteryDischargingTime.innerHTML = battery.dischargingTime + " seconds";
        }
    

        // Battery Level Change
        battery.addEventListener("levelChange", () =>{
            updateLevelChange();
        })
        function updateLevelChange(){
           const level = battery.level * 100 + "%";
          batteryLevel.innerHTML = level;
        }
        
    });
   };
};
battery();




