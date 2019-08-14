var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());
app.get("/", function(req, res) {
  res.send([
    {
      discount: 20,
      name: "orange",
      variants: [
        {
          wg: 500,
          price: 20
        },
        {
          wg: "1kg",
          price: 50
        }
      ]
    },
    {
      discount: 10,
      name: "Apple",
      variants: [
        {
          wg: 500,
          price: 20
        },
        {
          wg: "1kg",
          price: 50
        }
      ]
    },
    {
      discount: 20,
      name: "orange",
      variants: [
        {
          wg: 500,
          price: 20
        },
        {
          wg: "1kg",
          price: 50
        }
      ]
    },
    {
      discount: 20,
      name: "orange",
      variants: [
        {
          wg: 500,
          price: 20
        },
        {
          wg: "1kg",
          price: 50
        }
      ]
    }
  ]);
});

app.listen(3001);
