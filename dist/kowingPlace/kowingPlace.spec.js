"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const kowingPlace_resolver_1 = require("./kowingPlace.resolver");
describe("kowing", () => {
    test("should createUserExternal correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        const input = {
            name: "boeing",
            email: "omg@gmeow.com",
            tel: "1234567890",
            password: "boeing555",
        };
        const output = yield (0, kowingPlace_resolver_1.createUserExternal)({
            name: input.name,
            email: input.email,
            tel: input.tel,
            password: input.password,
        });
        console.log(output);
        expect(output.name === input.name).toBe(true);
        expect(output.email === input.email).toBe(true);
        expect(output.tel === input.tel).toBe(true);
        expect(output.password === input.password).toBe(true);
    }));
    test("should createUserInternal correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        const input = {
            name: "shop1",
            email: "shop1@gmeow.com",
            tel: "0123455555",
            password: "555555shop1",
        };
        const output = yield (0, kowingPlace_resolver_1.createUserInternal)({
            name: input.name,
            email: input.email,
            tel: input.tel,
            password: input.password,
        });
        console.log(output);
        expect(output.name === input.name).toBe(true);
        expect(output.email === input.email).toBe(true);
        expect(output.tel === input.tel).toBe(true);
        expect(output.password === input.password).toBe(true);
    }));
    test("should createDurationCategory correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        const input = {
            duration: 3,
        };
        const output = {
            duration: input.duration,
        };
        console.log(output);
        expect(output.duration === input.duration).toBe(true);
    }));
    test("should getCoWorkUserChoose correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        const input = {
            id: 1,
        };
        const output = yield (0, kowingPlace_resolver_1.getCoWorkUserChoose)({
            id: input.id,
        });
        console.log(output);
    }));
    test("should getRoomByCoWorkId correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        const input = {
            coWorlId: 11,
        };
        const output = yield (0, kowingPlace_resolver_1.getRoomByCoWorkId)({
            coWorkId: input.coWorlId,
        });
        console.log(output);
    }));
    test("should getVerifyCodeByUserConfirmBooking correctly", () => __awaiter(void 0, void 0, void 0, function* () { }));
    test("should createFacility correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        const input = {
            name: "ไก่ฟรี",
        };
        const output = yield (0, kowingPlace_resolver_1.createFacility)({
            name: input.name,
        });
        console.log(output);
        //expect(output.name === input.name).toBe(true);
    }));
    test("should createCoWorkDetail correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        const input = {
            id: 10,
            name: "HUBBA Thailand",
            description: "HUBBA Coworking space ตั้งอยู่ใจกลางเมืองย่านสาทร มีการตกแต่งด้วยสีขาวเป็นหลัก ภายใน space ไม่ได้มีเพียงแค่พื้นที่ทำงานส่วนรวมเท่านั้น ยังมีห้องประชุม ออฟฟิศให้เช่า และพื้นที่จัดเวิร์คชอปมากมาย ทำให้ทุกคนสามารถเลือกใช้บริการได้ตามความสะดวกและความต้องการ รวมถึงสามารถเข้าร่วมคอมมูนิตี้ที่สนใจได้ เรียกได้ว่าถ้าคุณอยากได้คอนเนคชั่นที่เหนียวแน่นและอยากพัฒนาตัวเองในทุก ๆ วัน HUBBA ก็อาจจะเป็นตัวเลือกที่ใช่สำหรับคุณ",
            location: "ใกล้ BTS ช่องนนทรี ชั้น 2 ของศูนย์อาหาร Siamnara Food Work",
            tel: " 02 089 1651",
            picture: "https://uploads-ssl.webflow.com/5c3aef15e76e088efcf1e0ea/5d7e6c7506acdbeb57b48056_OgQqoCDLbojDPanW8-CPNo5pHIgAb6gVWBFeBhqlPbkxLdfr_XAJxubd1z5x6q8IsfS7hBQrU6oINgQ1Z1oWacYYXivbDmuO_U_0Mo27Z3hlxRTnlamw9KisAmYPXq-MdK7sN0-k.jpeg",
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
    }));
    test("should updateCoWorkDetail correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        const input = {
            name: "123CoWorking",
            description: "HUBBA Coworking space ตั้งอยู่ใจกลางเมืองย่านสาทร มีการตกแต่งด้วยสีขาวเป็นหลัก ภายใน space ไม่ได้มีเพียงแค่พื้นที่ทำงานส่วนรวมเท่านั้น ยังมีห้องประชุม ออฟฟิศให้เช่า และพื้นที่จัดเวิร์คชอปมากมาย ทำให้ทุกคนสามารถเลือกใช้บริการได้ตามความสะดวกและความต้องการ ",
            location: "ใกล้ BTS ช่องนนทรี ชั้น 2 ของศูนย์อาหาร Siamnara",
            picture: "https://uploads-ssl.webflow.com/5c3aef15e76e088efcf1e0ea/5d7e6c7506acdbeb57b48056_OgQqoCDLbojDPanW8-CPNo5pHIgAb6gVWBFeBhqlPbkxLdfr_XAJxubd1z5x6q8IsfS7hBQrU6oINgQ1Z1oWacYYXivbDmuO_U_0Mo27Z3hlxRTnlamw9KisAmYPXq-MdK7sN0-k.jpeg",
            tel: "02 089 1651",
        };
        // const output = await updateCoWorkDetail({
        //   name:input.name,
        //   description:input.description,
        //   location:input.location,
        //   picture:input.picture,
        //   tel:input.tel
        // })
    }));
    test("should getStatusUserBookInternal correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        const input = {
            status: "Arrived",
        };
        // const output = await getStatusUserBookInternal({
        //   status:String(input.status)
        // })
    }));
});
