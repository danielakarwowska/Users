const user = [
    {
      name: "user1",
      email: "aaa@user1.pl",
      uri: "daniela",
      company: "company 123",
    },
    {
        name: "user2",
        email: "aaa@user2.pl",
        uri: "daniela",
        company: "company 222",
      },
    {
      name: "user3",
      email: "aaa@user3.pl",
      uri: "daniela",
      company: "company 999",
    },
    {
        name: "user4",
        email: "aaa@user4.pl",
        uri: "daniela",
        company: "company 999",
      },
  ];

  const generateTable = () => {
      const tbl=document.createElement('table')
      const tblBody=document.createElement('tbody')
    

      //creating cells

      for(let x=1;x<=user.length;x++){
          //create a table row
          const row = document.createElement('tr')
      for(let y=1;y<=2;y++){
        const cell = document.createElement("td");
        const cellText = document.createTextNode("User "+x+", column "+y);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      tblBody.appendChild(row);
    }  
    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
    tbl.setAttribute("border", "3");
    }
  generateTable()