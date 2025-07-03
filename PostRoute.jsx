// const express = require("express");
// const app = express();
// const PORT = 3000;

// // middleware
// app.use(express.json());

// // post route
// app.post("/api/users", (req, res) => {
//   const { name, email } = req.body;

//   // basic validation
//   if (!name || !email) {
//     return res.status(400).json({ message: "Name and email are required" });
//   }

//   console.log("New user:", { name, email });

//   res.status(201).json({
//     message: "User created successfully",
//     data: { name, email },
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// const express = require("express");
// const app = express();

// const PORT = 3000;

// app.use(express.json());

// app.post("/api/users", (req, res) => {
//   const { name, email } = req.body;
// })

// if(!name || !email) {
//  return res.status(400).json({message: "Name and email are required"});
// }

//   console.log("New user:", { name, email });

//   res.status(201).json({
//     message: "User created successfully",
//     data: { name, email },
//   });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} `);
});

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/api/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "Name and email are required",
    });
  }
  //   console.log("New user:", { name, email });
  console.log("New User:", { name, email });
});
res.status(201).json({
  message: "user created successfully",
  data: { name, email },
});
