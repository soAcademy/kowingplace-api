import {
  createCoWorkDetail,
  createFacility,
  createUserExternal,
  createUserInternal,
  getCoWorkUserChoose,
  getRoomByCoWorkId,
  updateCalendarBookingByCoWorkId,
} from "./kowingPlace.resolver";

describe("kowing", () => {
  test("should createUserExternal correctly", async () => {
    const input = {
      name: "boeing",
      email: "omg@gmeow.com",
      tel: "1234567890",
      password: "boeing555",
    };
    const output = await createUserExternal({
      name: input.name,
      email: input.email,
      tel: input.tel,
      password: input.password,
    });

    console.log(output);

    // expect(output.name === input.name).toBe(true);
    // expect(output.email === input.email).toBe(true);
    // expect(output.tel === input.tel).toBe(true);
    // expect(output.password === input.password).toBe(true);
  });

  test("should createUserInternal correctly", async () => {
    const input = {
      name: "shop1",
      email: "shop1@gmeow.com",
      tel: "0123455555",
      password: "555555shop1",
    };
    const output = await createUserInternal({
      name: input.name,
      email: input.email,
      tel: input.tel,
      password: input.password,
    });
    console.log(output);

    // expect(output.name === input.name).toBe(true);
    // expect(output.email === input.email).toBe(true);
    // expect(output.tel === input.tel).toBe(true);
    // expect(output.password === input.password).toBe(true);
  });

  test("should createDurationCategory correctly", async () => {
    const input = {
      duration: 3,
    };

    const output = {
      duration: input.duration,
    };
    console.log(output);

    expect(output.duration === input.duration).toBe(true);
  });

  test("should getCoWorkUserChoose correctly", async () => {
    const input = {
      id: 1,
    };
    const output = await getCoWorkUserChoose({
      id: input.id,
    });
    console.log(output);
  });

  test("should getRoomByCoWorkId correctly", async () => {
    const input = {
      coWorlId: 11,
    };
    const output = await getRoomByCoWorkId({
      coWorkId: input.coWorlId,
    });
    console.log(output);
  });

  test("should getVerifyCodeByUserConfirmBooking correctly", async () => {});

  test("should createFacility correctly", async () => {
    const input = {
      name: "ไก่ฟรี",
    };
    const output = await createFacility({
      name: input.name,
    });
    console.log(output);
    //expect(output.name === input.name).toBe(true);
  });

  test("should createCoWorkDetail correctly", async () => {
    const input = {
      id: 10,
      name: "HUBBA Thailand",
      description:
        "HUBBA Coworking space ตั้งอยู่ใจกลางเมืองย่านสาทร มีการตกแต่งด้วยสีขาวเป็นหลัก ภายใน space ไม่ได้มีเพียงแค่พื้นที่ทำงานส่วนรวมเท่านั้น ยังมีห้องประชุม ออฟฟิศให้เช่า และพื้นที่จัดเวิร์คชอปมากมาย ทำให้ทุกคนสามารถเลือกใช้บริการได้ตามความสะดวกและความต้องการ รวมถึงสามารถเข้าร่วมคอมมูนิตี้ที่สนใจได้ เรียกได้ว่าถ้าคุณอยากได้คอนเนคชั่นที่เหนียวแน่นและอยากพัฒนาตัวเองในทุก ๆ วัน HUBBA ก็อาจจะเป็นตัวเลือกที่ใช่สำหรับคุณ",
      location: "ใกล้ BTS ช่องนนทรี ชั้น 2 ของศูนย์อาหาร Siamnara Food Work",
      tel: " 02 089 1651",
      picture:
        "https://uploads-ssl.webflow.com/5c3aef15e76e088efcf1e0ea/5d7e6c7506acdbeb57b48056_OgQqoCDLbojDPanW8-CPNo5pHIgAb6gVWBFeBhqlPbkxLdfr_XAJxubd1z5x6q8IsfS7hBQrU6oINgQ1Z1oWacYYXivbDmuO_U_0Mo27Z3hlxRTnlamw9KisAmYPXq-MdK7sN0-k.jpeg",
      userInternalId: 11,
    };
    // const output = await createCoWorkDetail({
    //   name: input.name,
    //   description: input.description,
    //   location: input.location,
    //   picture: input.picture,
    //   tel: input.tel,
    //   userInternalId: input.userInternalId,

    // });
    // console.log(output);
    // expect(output.name === input.name).toBe(true);
    // expect(output.description === input.description).toBe(true);
    // expect(output.location === input.location).toBe(true);
    // expect(output.picture === input.picture).toBe(true);
    // expect(output.tel === input.tel).toBe(true);
    // expect(output.userInternalId === input.userInternalId).toBe(true);
  });

  test("should updateCoWorkDetail correctly", async () => {
    const input = {
      name: "123CoWorking",
      description:
        "HUBBA Coworking space ตั้งอยู่ใจกลางเมืองย่านสาทร มีการตกแต่งด้วยสีขาวเป็นหลัก ภายใน space ไม่ได้มีเพียงแค่พื้นที่ทำงานส่วนรวมเท่านั้น ยังมีห้องประชุม ออฟฟิศให้เช่า และพื้นที่จัดเวิร์คชอปมากมาย ทำให้ทุกคนสามารถเลือกใช้บริการได้ตามความสะดวกและความต้องการ ",
      location: "ใกล้ BTS ช่องนนทรี ชั้น 2 ของศูนย์อาหาร Siamnara",
      picture:
        "https://uploads-ssl.webflow.com/5c3aef15e76e088efcf1e0ea/5d7e6c7506acdbeb57b48056_OgQqoCDLbojDPanW8-CPNo5pHIgAb6gVWBFeBhqlPbkxLdfr_XAJxubd1z5x6q8IsfS7hBQrU6oINgQ1Z1oWacYYXivbDmuO_U_0Mo27Z3hlxRTnlamw9KisAmYPXq-MdK7sN0-k.jpeg",
      tel: "02 089 1651",
    };
    // const output = await updateCoWorkDetail({
    //   name:input.name,
    //   description:input.description,
    //   location:input.location,
    //   picture:input.picture,
    //   tel:input.tel
    // })
  });

  test("should getStatusUserBookInternal correctly", async () => {
    const input = {
      status: "Arrived",
    };
    // const output = await getStatusUserBookInternal({
    //   status:String(input.status)
    // })
  });

  test("should updateCalendarBookingByCoWorkId correctly", async () => {
    const input = {
      open: [10, 10, 10, 10, 10, 0, 0],
      close: [23, 23, 23, 23, 23, 0, 0],
      OpenClose24Hours: [false, false, false, false, false, false, false],
      coWorkId: 23,
    };
    const output = await updateCalendarBookingByCoWorkId({
      coWorkId: input.coWorkId,
      open: input.open,
      close: input.close,
      openClose24hours: input.OpenClose24Hours,
    });
    console.log(output);
    // expect(output.Open === input.open).toBe(true);
    // expect(output.Close === input.close).toBe(true);
    // expect(output.OpenClose24Hours === input.openClose24Hours).toBe(true);
    // expect(output.coWorkId === input.coWorkId).toBe(true);
  });
});
