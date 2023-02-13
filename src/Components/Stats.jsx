import React from "react";
import "../App.css";
const Stats = () => {
    // [![GitHub Streak](https://github-readme-streak-stats.herokuapp.com?user=Mustaqhasan&theme=dark)](https://git.io/streak-stats)
  return (
    // streak 
    <div >
      <div className="stats">
        <h3>Git Stats</h3>
      </div>
      <div style={{ width: "40%", margin: "auto" }}>
        <a id="github-streak-stats" href="https://github.com/Mustaqhasan">
          <img
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com?user=Mustaqhasan&theme=dark"
          />
        </a>
      </div>
 
      <div
        
        style={{
          width: "50%",
          height: "300px",
          display: "flex",
          margin: "auto",
        }}
      >
        <a id="github-top-langs" href="https://github.com/Mustaqhasan">  
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Mustaqhasan&theme=dark"  //launguages
          />
        </a>
        <a id="github-stats-card" href="https://github.com/Mustaqhasan">
          <img
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=Mustaqhasan&count_private=true&show_icons=true&theme=dark" //stats
          />
        </a>
      </div>
    </div>
  );
};

export default Stats;