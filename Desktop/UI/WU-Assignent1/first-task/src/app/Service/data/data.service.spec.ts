import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { DataService } from "./data.service";

describe("DataService", () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should retrieve receivers list", () => {
    const mockReceivers = [
      { id: 1, name: "Receiver 1" },
      { id: 2, name: "Receiver 2" },
    ];

    service.getReceivers().subscribe((receivers) => {
      console.warn(receivers);
      expect(receivers).toEqual(mockReceivers);
    });

    const req = httpMock.expectOne("http://localhost:3000/CurrentData");
    expect(req.request.method).toBe("GET");
    req.flush(mockReceivers);
  });

  it("should delete a receiver by ID", () => {
    const receiverId = 1;

    service.deleteReceiver(receiverId).subscribe((response) => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(
      `http://localhost:3000/CurrentData/${receiverId}`
    );
    expect(req.request.method).toBe("DELETE");
    req.flush({});
  });

  // Add more test cases for other methods in the DataService class
});
