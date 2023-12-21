/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   colorCell: () => (/* binding */ colorCell),\n/* harmony export */   createGame: () => (/* binding */ createGame),\n/* harmony export */   createGrid: () => (/* binding */ createGrid),\n/* harmony export */   createGridPlayer: () => (/* binding */ createGridPlayer),\n/* harmony export */   finishGame: () => (/* binding */ finishGame)\n/* harmony export */ });\n/* harmony import */ var _classes_ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/ship.js */ \"./src/classes/ship.js\");\n/* harmony import */ var _classes_player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/player.js */ \"./src/classes/player.js\");\n/* harmony import */ var _classes_gameBoard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/gameBoard.js */ \"./src/classes/gameBoard.js\");\n/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pubsub.js */ \"./src/pubsub.js\");\n\r\n\r\n\r\n\r\n\r\nconst playerGameBoard = new _classes_gameBoard_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"player\");\r\nconst computerGameBoard = new _classes_gameBoard_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"computer\");\r\nconst player = new _classes_player_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Player\");\r\nconst computerPlayer = new _classes_player_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Computer\");\r\nconst main = document.querySelector(\".main\");\r\n\r\nfunction createGame() {\r\n  playerCreateShip(playerGameBoard);\r\n  computerCreateShip(computerGameBoard);\r\n}\r\n\r\nfunction finishGame() {\r\n  const popup = document.querySelector(\".popup\");\r\n  const text = document.querySelector(\".text\");\r\n  if (computerGameBoard.areAllShipsSunk()) {\r\n    popup.style.display = \"flex\";\r\n    text.textContent = \"You Won!\";\r\n  } else if (playerGameBoard.areAllShipsSunk()) {\r\n    popup.style.display = \"flex\";\r\n    text.textContent = \"You Lose!\";\r\n  }\r\n  const btn = document.querySelector(\".btn\");\r\n  btn.addEventListener(\"click\", function () {\r\n    location.reload();\r\n  });\r\n}\r\n\r\nfunction playerCreateShip(playerGameBoard) {\r\n  playerGameBoard.placeShip(new _classes_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3), 2, 3);\r\n  playerGameBoard.placeShip(new _classes_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4), 4, 5);\r\n  playerGameBoard.placeShip(new _classes_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5), 5, 1);\r\n  playerGameBoard.placeShip(new _classes_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3), 1, 6, true);\r\n  playerGameBoard.placeShip(new _classes_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2), 0, 7, true);\r\n  // console.log(playerGameBoard);\r\n}\r\n\r\nfunction computerCreateShip(computerGameBoard) {\r\n  computerGameBoard.placeRandomShip(new _classes_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3));\r\n  computerGameBoard.placeRandomShip(new _classes_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4));\r\n  computerGameBoard.placeRandomShip(new _classes_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5));\r\n  computerGameBoard.placeRandomShip(new _classes_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3), true);\r\n  computerGameBoard.placeRandomShip(new _classes_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2), true);\r\n  // console.log(computerGameBoard);\r\n}\r\n\r\nconst boxPlayers = [];\r\n\r\nfunction createGridPlayer() {\r\n  const main = document.querySelector(\"main\");\r\n  const gridPlayer = document.createElement(\"div\");\r\n  gridPlayer.classList.add(\"gridPlayer\");\r\n  main.appendChild(gridPlayer);\r\n\r\n  for (let row = 0; row < 10; row++) {\r\n    for (let col = 0; col < 10; col++) {\r\n      const boxPlayer = document.createElement(\"div\");\r\n      boxPlayer.classList.add(\"boxOnGridToComputer\");\r\n      boxPlayer.dataset.row = row;\r\n      boxPlayer.dataset.column = col;\r\n      boxPlayer.dataset.data = playerGameBoard.grid[row][col];\r\n\r\n      boxPlayer.style[\"border-style\"] = \"solid\";\r\n      boxPlayer.style[\"border-width\"] = \"1px\";\r\n\r\n      gridPlayer.appendChild(boxPlayer);\r\n      boxPlayers.push(boxPlayer);\r\n    }\r\n  }\r\n\r\n  return boxPlayers;\r\n}\r\n\r\nfunction colorCell(rowToColor, colToColor) {\r\n  boxPlayers.forEach((boxPlayer) => {\r\n    const row = parseInt(boxPlayer.dataset.row);\r\n    const col = parseInt(boxPlayer.dataset.column);\r\n    if (\r\n      row === rowToColor &&\r\n      col === colToColor &&\r\n      playerGameBoard.grid[rowToColor][colToColor] === \"x\"\r\n    ) {\r\n      boxPlayer.style.backgroundImage =\r\n        \"url('../dist/image/icons8-boom-96.png')\";\r\n      boxPlayer.style.backgroundSize = \"cover\";\r\n    } else if (\r\n      row === rowToColor &&\r\n      col === colToColor &&\r\n      playerGameBoard.grid[rowToColor][colToColor] === \"o\"\r\n    ) {\r\n      boxPlayer.style.backgroundColor = \"#bde0fe\";\r\n    }\r\n  });\r\n}\r\n\r\nfunction createGrid() {\r\n  const gridComputer = document.createElement(\"div\");\r\n  gridComputer.classList.add(\"gridComputer\");\r\n  main.appendChild(gridComputer);\r\n\r\n  for (let row = 0; row < 10; row++) {\r\n    for (let col = 0; col < 10; col++) {\r\n      const boxComputer = document.createElement(\"button\");\r\n      boxComputer.classList.add(\".boxOnGridToComputer\");\r\n      boxComputer.dataset.row = row;\r\n      boxComputer.dataset.column = col;\r\n\r\n      boxComputer.style[\"border-style\"] = \"solid\";\r\n      boxComputer.style[\"border-width\"] = \"1px\";\r\n      boxComputer.style.background = \"none\";\r\n      boxComputer.style.cursor = \"pointer\";\r\n\r\n      boxComputerClick(boxComputer);\r\n      gridComputer.appendChild(boxComputer);\r\n    }\r\n  }\r\n}\r\n\r\nfunction boxComputerClick(boxComputer) {\r\n  boxComputer.addEventListener(\"click\", function (e) {\r\n    if (boxComputer.style.background === \"none\") {\r\n      handleClick(e, boxComputer);\r\n      computerTurn();\r\n      setTimeout(() => {\r\n        finishGame();\r\n      }, 500);\r\n    }\r\n  });\r\n}\r\n\r\nfunction handleClick(event, boxComputer) {\r\n  const row = event.currentTarget.dataset.row;\r\n  const column = event.currentTarget.dataset.column;\r\n\r\n  if (computerGameBoard.grid[row][column] !== null) {\r\n    boxComputer.style.backgroundImage =\r\n      \"url('../dist/image/icons8-boom-96.png')\";\r\n    boxComputer.style.backgroundSize = \"cover\";\r\n    player.makeAttack(computerGameBoard, row, column);\r\n    playerGameBoard.checkShipsStatus();\r\n    computerGameBoard.checkShipsStatus();\r\n  } else {\r\n    boxComputer.style.background = \"#bde0fe\";\r\n  }\r\n  return {\r\n    row,\r\n    column,\r\n  };\r\n}\r\n\r\nfunction computerTurn() {\r\n  computerPlayer.makeRandomAttack(playerGameBoard);\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/UI.js?");

/***/ }),

/***/ "./src/classes/gameBoard.js":
/*!**********************************!*\
  !*** ./src/classes/gameBoard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameBoard)\n/* harmony export */ });\nclass GameBoard {\r\n  constructor(name) {\r\n    this.rows = 10;\r\n    this.columns = 10;\r\n    this.grid = this.createBoard();\r\n    this.attacks = [];\r\n    this.ships = [];\r\n    this.name = name;\r\n  }\r\n\r\n  createBoard() {\r\n    return Array.from({ length: this.rows }, () => Array(this.columns).fill(null));\r\n  }\r\n\r\n  placeShip(ship, row, column, isVertical = false) {\r\n    if (isVertical) {\r\n      this.placeShipInColumn(ship, row, column);\r\n    } else {\r\n      this.placeShipInRow(ship, row, column);\r\n    }\r\n  }\r\n\r\n  placeRandomShip(ship, isVertical = false) {\r\n    let placedSuccessfully = false;\r\n  \r\n    while (!placedSuccessfully) {\r\n      const randomRow = Math.floor(Math.random() * this.rows);\r\n      const randomColumn = Math.floor(Math.random() * this.columns);\r\n  \r\n      // console.log(`Trying to place random ship at (${randomRow}, ${randomColumn})`);\r\n  \r\n      try {\r\n        if (isVertical) {\r\n          this.placeShipInColumn(ship, randomRow, randomColumn);\r\n        } else {\r\n          this.placeShipInRow(ship, randomRow, randomColumn);\r\n        }\r\n        \r\n        placedSuccessfully = true;\r\n      } catch (error) {\r\n\r\n        // console.error(`Error placing random ship: ${error.message}`);\r\n      }\r\n    }\r\n  }\r\n  \r\n  \r\n\r\n  placeShipInRow(ship, row, column) {\r\n    if (row + ship.lengthOfShip > this.rows || column + ship.lengthOfShip > this.columns) {\r\n      throw new Error('Cannot place the ship at the given coordinates. Out of bounds.');\r\n    }\r\n\r\n    for (let i = 0; i < ship.lengthOfShip; i++) {\r\n      if (this.grid[row][column + i] !== null) {\r\n        throw new Error('Cannot place the ship at the given coordinates. Another ship is already there.');\r\n      }\r\n    }\r\n\r\n    for (let i = 0; i < ship.lengthOfShip; i++) {\r\n      this.grid[row][column + i] = ship;\r\n    }\r\n\r\n    this.ships.push(ship);\r\n  }\r\n\r\n  placeShipInColumn(ship, row, column) {\r\n    if (row + ship.lengthOfShip > this.rows || column + ship.lengthOfShip > this.columns) {\r\n      throw new Error('Cannot place the ship at the given coordinates. Out of bounds.');\r\n    }\r\n\r\n    for (let i = 0; i < ship.lengthOfShip; i++) {\r\n      if (this.grid[row + i][column] !== null) {\r\n        throw new Error('Cannot place the ship at the given coordinates. Another ship is already there.');\r\n      }\r\n    }\r\n\r\n    for (let i = 0; i < ship.lengthOfShip; i++) {\r\n      this.grid[row + i][column] = ship;\r\n    }\r\n\r\n    this.ships.push(ship);\r\n  }\r\n\r\n  receiveAttack(row, column) {\r\n    const coordinatesAlreadyAttacked = this.attacks.some(\r\n      (attack) => attack.row === row && attack.column === column\r\n    );\r\n  \r\n    if (coordinatesAlreadyAttacked) {\r\n      console.log(`Coordinates (${row}, ${column}) have already been attacked. Please choose another pair.`);\r\n      return false; // Already attacked\r\n    } else {\r\n      const shipAtLocation = this.grid[row][column];\r\n  \r\n      if (shipAtLocation === null) {\r\n        // console.log(`Missed at (${row}, ${column})`);\r\n        this.grid[row][column] = 'o';\r\n      } else {\r\n        // console.log(`Hit at (${row}, ${column})`);\r\n        shipAtLocation.hits();\r\n        this.grid[row][column] = 'x';\r\n      }\r\n  \r\n      this.attacks.push({ row, column });\r\n      return true; // Hit or Missed\r\n    }\r\n  }\r\n  \r\n  \r\n\r\n  reportAttacks() {\r\n    // console.log('Attacks:');\r\n    this.attacks.forEach((attack) => console.log(`(${attack.row}, ${attack.column})`));\r\n  }\r\n\r\n  areAllShipsSunk() {\r\n    return this.ships.every((ship) => ship.isSunk());\r\n  }\r\n\r\n  checkShipsStatus() {\r\n    this.ships.forEach((ship) => {\r\n      if (ship.lengthOfShip === 0) {\r\n        ship.shipSunk = true;\r\n      }\r\n    });\r\n  }\r\n\r\n  getRandomAttackCoordinates() {\r\n    const randomRow = Math.floor(Math.random() * this.rows);\r\n    const randomColumn = Math.floor(Math.random() * this.columns);\r\n    return { row: randomRow, column: randomColumn };\r\n  }\r\n\r\n  isCoordinateAttacked(row, column) {\r\n    return this.attacks.some(\r\n      (attack) => attack.row === row && attack.column === column\r\n    );\r\n  }\r\n  \r\n\r\n  // getRandomPlacesCoordinates() {\r\n  //   const randomRow = Math.floor(Math.random() * this.rows);\r\n  //   const randomColumn = Math.floor(Math.random() * this.columns);\r\n  //   return { row: randomRow, column: randomColumn };\r\n  // }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/classes/gameBoard.js?");

/***/ }),

/***/ "./src/classes/player.js":
/*!*******************************!*\
  !*** ./src/classes/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UI */ \"./src/UI.js\");\n\r\nclass Player {\r\n  constructor(name) {\r\n    this.name = name;\r\n  }\r\n\r\n  makeRandomAttack(opponentGameBoard) {\r\n    let success = false;\r\n  \r\n    while (!success) {\r\n      const coordinates = opponentGameBoard.getRandomAttackCoordinates();\r\n      const { row, column } = coordinates;\r\n  \r\n      if (!opponentGameBoard.isCoordinateAttacked(row, column)) {\r\n        // If the chosen coordinates are not attacked, make the attack\r\n        success = opponentGameBoard.receiveAttack(row, column);\r\n        // console.log(`${this.name} attacked: (${row}, ${column})`);\r\n        (0,_UI__WEBPACK_IMPORTED_MODULE_0__.colorCell)(row, column)\r\n      }\r\n      \r\n    }\r\n  }\r\n  \r\n\r\n  makeAttack(opponentGameBoard, row, column) {\r\n    opponentGameBoard.receiveAttack(row, column);\r\n    // console.log(`${this.name} attacked: (${row}, ${column})`);\r\n  }\r\n}\r\n\r\n// module.exports = Player;\r\n\n\n//# sourceURL=webpack://battleship/./src/classes/player.js?");

/***/ }),

/***/ "./src/classes/ship.js":
/*!*****************************!*\
  !*** ./src/classes/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\r\n  constructor(length) {\r\n    this.length = length;\r\n    this.shipSunk = false;\r\n  }\r\n\r\n  get lengthOfShip() {\r\n    return this.length;\r\n  }\r\n\r\n  hits() {\r\n    return (this.length -= 1);\r\n  }\r\n\r\n  isSunk() {\r\n    if (this.length === 0) {\r\n      return this.shipSunk = true;\r\n    }\r\n    return this.shipSunk = false;\r\n  }\r\n}\r\n\r\n// module.exports = Ship;\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/classes/ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', function () {\r\n  // Your code here\r\n  (0,_UI__WEBPACK_IMPORTED_MODULE_0__.createGame)();\r\n  (0,_UI__WEBPACK_IMPORTED_MODULE_0__.createGridPlayer)()\r\n  ;(0,_UI__WEBPACK_IMPORTED_MODULE_0__.createGrid)();\r\n  \r\n});\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst pubsub = {\r\n  events: {},\r\n  subscribe(evName, fn) {\r\n    // console.log(`PUBSUB: someone just subscribed to know about ${evName}`);\r\n    // add an event with a name as new or to existing list\r\n    this.events[evName] = this.events[evName] || [];\r\n    this.events[evName].push(fn);\r\n  },\r\n  unsubscribe(evName, fn) {\r\n    // console.log(`PUBSUB: someone just UNsubscribed from ${evName}`);\r\n    // remove an event function by name\r\n    if (this.events[evName]) {\r\n      this.events[evName] = this.events[evName].filter((f) => f !== fn);\r\n    }\r\n  },\r\n  publish(evName, data) {\r\n    // console.log(`PUBSUB: Making an broadcast about ${evName} with ${data}`);\r\n    // emit|publish|announce the event to anyone who is subscribed\r\n    if (this.events[evName]) {\r\n      this.events[evName].forEach((f) => {\r\n        f(data);\r\n      });\r\n    }\r\n  },\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pubsub);\n\n//# sourceURL=webpack://battleship/./src/pubsub.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;