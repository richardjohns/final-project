// import server from "./server"
import startServer from "./socketserver"
import makeStore from "../client/store"

// socket.io
export const store = makeStore();
startServer(store);

// store.dispatch({
//   type: "SET_ENTRIES",
//   entries: require("./entries.json")
// });
// store.dispatch({
//   type: "NEXT"
// });

// Old
// const port = process.env.PORT || 3000;

// server.listen(port, function() {
//   console.log("Listening on port", port);
// });