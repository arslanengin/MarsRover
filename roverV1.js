
        class Rover {
            constructor(platoX, platoY, yon) {
                this.platoX = platoX;
                this.platoY = platoY;
                this.yon = yon;
            }

            //get platoX() {
            //    return this._platoX;
            //}
            //set platoX(platoX) {
            //    return this._platoX = platoX;
            //}

            //get platoY() {
            //    return this._platoY = platoY;
            //}
            //set platoY(platoY) {
            //    return this._platoY = platoY;
            //}
            Plato = function () { return new Plato(10, 10) };


        }
        class Plato {
            constructor(maxx, maxy) {
                this.MaxX = maxx;
                this.MaxY = maxy;
            }
            //get MaxX() {
            //    return this._MaxX;
            //}
            //set MaxX(MaxX) {
            //    return this._MaxX = MaxX;
            //}
            //get maxY(MaxY) {
            //    return this._MaxY;
            //}
            //set MaxY(MaxY) {
            //    return this._MaxY = MaxY;
            //}
        }
        var alfaRover = new Rover(0, 0, "N"); // Start position

        const aspects = {
            Middle: 'M',
            Right: 'R',
            Left: 'L',
        }
        const directions = {

            North: 'N',
            South: 'S',
            West: 'W',
            East: 'E',
        }
        var array = ["M", "R", "M", "M", "R", "L", "L", "R", "M", "L",]

        for (var i = 0; i < array.length; i++) {
            if (array[i] == aspects.Middle) {
                switch (alfaRover.yon) {
                    case directions.North:
                        alfaRover.platoY++;
                        console.log("go up");
                        break;
                    case directions.South:
                        alfaRover.platoY--;
                        console.log("go downhill");
                        break;
                    case directions.East:
                        alfaRover.platoX++;
                        console.log("go east");
                        break;
                    case directions.West:
                        alfaRover.platoX--;
                        console.log("go west");
                }
            }
            else if (array[i] == aspects.East) {
                switch (alfaRover.yon) {
                    case directions.North:
                        alfaRover.yon = directions.West;
                        break;
                    case directions.South:
                        alfaRover.yon = directions.East;
                        break;
                    case directions.West:
                        alfaRover.yon = directions.South;
                        break;
                    case directions.East:
                        alfaRover.yon = directions.North;

                }

            }
            else if (array[i] == aspects.Right) {
                switch (alfaRover.yon) {
                    case directions.North:
                        alfaRover.yon = directions.East;
                        break;
                    case directions.South:
                        alfaRover.yon = directions.West;
                        break;
                    case directions.West:
                        alfaRover.yon = directions.North;
                        break;
                    case directions.East:
                        alfaRover.yon = directions.South;
                }
            }

            console.log("Location" + alfaRover.platoX + " " + alfaRover.platoY);
        }


