//
//  DCGTests.swift
//  DriversLicenseBarcodeGenerator
//
//  Created by Kyle Decot on 10/5/17.
//  Copyright © 2017 Kyle Decot. All rights reserved.
//

import XCTest

class DCGTests: XCTestCase {

    func testFormat() {
        let dataElement = DCG(.US)
        
        XCTAssertEqual(dataElement.format(), "DCGUSA")
    }

}