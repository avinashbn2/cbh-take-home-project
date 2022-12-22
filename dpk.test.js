const crypto = require("crypto");
const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("returns trivial partition key if event is null or undefined", () => {
    const event = null;
    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey).toBe("0");
  });
  
  it("returns event partition key if it is a string", () => {
    const event = { partitionKey: "key" };
    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey).toBe("key");
  });
  
  it("returns JSON string of event partition key if it is not a string", () => {
    const event = { partitionKey: { key: "value" } };
    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey).toBe(JSON.stringify(event.partitionKey));
  });
  
  it("returns SHA3-512 hash of event if event has no partition key", () => {
    const event = { data: "value" };
    const eventJson = JSON.stringify(event);
    const hash = crypto.createHash("sha3-512").update(eventJson).digest("hex");
    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey).toBe(hash);
  });
  
  
});


 