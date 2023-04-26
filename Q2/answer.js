const xml2js = require("xml2js");

function parseXmlToObject(xml) {
  let obj = null;
  xml2js.parseString(xml, { explicitArray: false }, function (err, result) {
    if (err) throw err;
    obj = result;
  });
  return obj;
}

const xml = `
  <node>
    <hello>World</hello>
    <nested>
      <bloop>Bleep</bloop>
    </nested>
  </node>
`;

const result = parseXmlToObject(xml);
console.log(result);

// This code is an implementation of a function parseXmlToObject that takes an XML string as input and returns a JavaScript object that represents the parsed XML. The function uses the xml2js package, which provides a parser that converts XML to JavaScript objects.

// Here's how the function works:

// The function receives an XML string as input.
// It initializes a variable obj to null.
// It uses the xml2js parser to parse the XML string into a JavaScript object. The {explicitArray: false} option tells the parser to not create arrays for elements that have only one child element.
// The parseString method is asynchronous and takes a callback function that will be called when the parsing is complete. Inside the callback function, the parsed JavaScript object is assigned to the obj variable.
// The function returns the obj variable.
// One potential issue with this implementation is that the xml2js parser is asynchronous, so the parseXmlToObject function returns obj immediately after calling parseString, but the obj variable may not have been assigned a value yet by the time the function returns.
