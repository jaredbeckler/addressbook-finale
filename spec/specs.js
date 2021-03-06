describe ('Contact', function () {
  it("creates a new contact with the given properties", function() {
    var testContact = new Contact("Spencer","Doran");
    expect(testContact.firstName).to.equal("Spencer");
    expect(testContact.lastName).to.equal("Doran");
    expect(testContact.addresses).to.eql([]);
  });

  it("adds the fullName method to a contact", function() {
    var testContact = new Contact("Sherlock", "Holmes");
    expect(testContact.fullName()).to.equal("Sherlock Holmes");
  });
});

describe('Address', function() {
  it("creates a new address with the given specifications", function() {
    var testAddress = new Address("Office", "123 Main St", "Test City", "Test State", "Test Zip");
    expect(testAddress.addressType).to.equal("Office");
    expect(testAddress.street).to.equal("123 Main St");
    expect(testAddress.city).to.equal("Test City");
    expect(testAddress.state).to.equal("Test State");
    expect(testAddress.zip).to.equal("Test Zip");
  });

  it("adds the fullAddress method to all addresses", function() {
    var testAddress = new Address("Office", "123 Main St", "Test City", "Test State", "Test Zip");
    expect(testAddress.fullAddress()).to.equal("Office: 123 Main St, Test City, Test State, Test Zip");
  });
});
