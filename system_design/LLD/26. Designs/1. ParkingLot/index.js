var VehicleType;
(function (VehicleType) {
    VehicleType["CAR"] = "Car";
    VehicleType["BIKE"] = "Bike";
    VehicleType["TRUCK"] = "Truck";
})(VehicleType || (VehicleType = {}));
var Status;
(function (Status) {
    Status["BOOKED"] = "Booked";
    Status["AVAILABLE"] = "Available";
    Status["OCCUPIED"] = "Occupied";
    Status["LEFT"] = "Left";
    Status["UNDER_MAINTENANCE"] = "Under Maintenance";
})(Status || (Status = {}));
var Vehicle = /** @class */ (function () {
    function Vehicle(number, type) {
        this.number = number;
        this.type = type;
    }
    return Vehicle;
}());
var Slot = /** @class */ (function () {
    function Slot(slotNo, vehicleType, status) {
        this.slotNo = slotNo;
        this.vehicleType = vehicleType;
        this.status = status;
    }
    Slot.prototype.isAvailable = function () {
        return this.status === Status.AVAILABLE;
    };
    Slot.prototype.park = function (vehicle) {
        if (!this.isAvailable())
            throw new Error("Slot not available");
        this.status = Status.OCCUPIED;
    };
    Slot.prototype.unpark = function () {
        if (this.status !== Status.OCCUPIED)
            throw new Error("Slot not occupied");
        this.status = Status.AVAILABLE;
    };
    return Slot;
}());
var ParkingLot = /** @class */ (function () {
    function ParkingLot(vehicleType, slots, status) {
        this.vehicleType = vehicleType;
        this.slots = slots;
        this.status = status;
    }
    return ParkingLot;
}());
var Ticket = /** @class */ (function () {
    function Ticket(vehicle, slotNo, status, entryTime, exitTime) {
        if (entryTime === void 0) { entryTime = new Date(); }
        if (exitTime === void 0) { exitTime = null; }
        this.vehicle = vehicle;
        this.slotNo = slotNo;
        this.status = status;
        this.entryTime = entryTime;
        this.exitTime = exitTime;
    }
    return Ticket;
}());
var BillPayment = /** @class */ (function () {
    function BillPayment(ticket) {
        var _a;
        this.ticket = ticket;
        this.price = (_a = {},
            _a[VehicleType.CAR] = 30,
            _a[VehicleType.BIKE] = 5,
            _a[VehicleType.TRUCK] = 50,
            _a);
    }
    BillPayment.prototype.calculateBill = function () {
        var rate = this.price[this.ticket.vehicle.type];
        var now = new Date();
        var entryTime = new Date(this.ticket.entryTime);
        var hours = Math.ceil((now.getTime() - entryTime.getTime()) / (1000 * 60 * 60)); // convert ms to hrs
        return rate * hours;
    };
    return BillPayment;
}());
var ParkingManager = /** @class */ (function () {
    function ParkingManager(parkingLot) {
        this.parkingLot = parkingLot;
    }
    ParkingManager.prototype.parkVehicle = function (vehicle) {
        var availableSlot = this.parkingLot.slots.find(function (slot) { return slot.isAvailable() && slot.vehicleType === vehicle.type; });
        if (!availableSlot) {
            console.log("No slot available");
            return null;
        }
        availableSlot.park(vehicle);
        return new Ticket(vehicle, availableSlot.slotNo, Status.BOOKED);
    };
    ParkingManager.prototype.unparkVehicle = function (ticket) {
        var slot = this.parkingLot.slots.find(function (s) { return s.slotNo === ticket.slotNo; });
        if (!slot)
            throw new Error("Invalid slot");
        slot.unpark();
        ticket.exitTime = new Date();
        ticket.status = Status.LEFT;
        var payment = new BillPayment(ticket);
        return payment.calculateBill();
    };
    return ParkingManager;
}());
var car = new Vehicle("KA-01-1234", VehicleType.CAR);
var slots = [
    new Slot("C1", VehicleType.CAR, Status.AVAILABLE),
    new Slot("C2", VehicleType.CAR, Status.AVAILABLE),
];
var lot = new ParkingLot(VehicleType.CAR, slots, Status.AVAILABLE);
var manager = new ParkingManager(lot);
var ticket = manager.parkVehicle(car);
console.log("Ticket Issued", ticket);
setTimeout(function () {
    var bill = manager.unparkVehicle(ticket);
    console.log("Bill Amount", bill);
    console.log("Ticket Released", ticket);
}, 1000 * 30); // simulate 1 hour parking
