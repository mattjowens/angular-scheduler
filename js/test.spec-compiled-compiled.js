"use strict";

describe("test", function () {
	it("should be defined1", function () {
		var myClass = new MyClass("xyz");
		expect(myClass.name).toEqual("xyz");

		myClass.name = "zzz";
		expect(myClass.name).toEqual("zzz");
	});
});

//# sourceMappingURL=test.spec-compiled.js.map

//# sourceMappingURL=test.spec-compiled-compiled.js.map