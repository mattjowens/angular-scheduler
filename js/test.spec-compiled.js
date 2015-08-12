"use strict";

describe("test", function () {
	it("should be defined", function () {
		var myClass = new MyClass("xyz");
		expect(myClass.name).toEqual("xyz");

		myClass.name = "zzz";
		expect(myClass.name).toEqual("dgsfs");
	});

	it("should be defined1", function () {
		var myClass = new MyClass("xyz");
		expect(myClass.name).toEqual("xyz");

		myClass.name = "zzz";
		expect(myClass.name).toEqual("zzz");
	});
});

//# sourceMappingURL=test.spec-compiled.js.map