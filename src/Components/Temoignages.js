import React, { Component } from 'react';
import './Temoignages.css';
import fond from '../Images/banniere.png';

const WitStyle = {
  backgroundImage: `url(${fond})`,
  backgroundSize:'cover',
  width: "100%",
  paddingTop: "12%",
  paddingBottom: "2%",
 }

class Temoignages extends Component {
    state={
      opacity: 0,
        texte:"",
        data:[{
          element:{
            image:"https://img00.deviantart.net/8db1/i/2016/027/e/f/portrait_of_marina_nery_by_nad4r-d9pi6qd.jpg",
            texte:"Everyday, I say 'Why Not'. ",
            nom:"Sue Bird"
          }
        },
        {
         element:{
          image:"http://78.media.tumblr.com/2c9e38146994b46d89e05a737de76df3/tumblr_n0jqwrVD3y1r1thfzo1_1280.jpg",
          texte:"Vamos. ",
          nom:"Rafael Nadal"
        }
      },
      {
        element:{
        image:"https://pbs.twimg.com/profile_images/577971207024197632/_3O3dOOF.jpeg",
        texte:"This why we play. ",
        nom:"Kyrie Irving"
        }
      }

      ]

      }
      afficher = () =>{
        this.setState({

        })
      }

  render() {
    let constante =
      this.state.data.map((el,index)=>{
        return(

          <div key={index} className="Wit-Grandcontainer">
          <div className="Wit-texteCache" onClick={this.afficher}>
            <em className="Wit-text"> {el.element.texte}&nbsp;</em>
            <p><strong> {el.element.nom}</strong></p>
          </div>
            <img src={(el.element.image)} className="Wit-app" alt="portrait"/>
            <p>{el.text}</p>

          </div>
        )

    });
    return (
      <div className="Wit" style={WitStyle}>
        <h1 className="Wit-title">Temoignages</h1>
      <div className="Wit-container">

       {constante}
      </div>
    </div>
    );
  }
}

export default Temoignages;
