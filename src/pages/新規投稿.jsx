import { Box, Heading, Text, FormControl, FormLabel, Input, Textarea, Button, Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const NewPost = () => {
  const [content, setContent] = useState("");
  const [spec, setSpec] = useState("");
  const [hourlyWage, setHourlyWage] = useState("");
  const [totalPayment, setTotalPayment] = useState("");
  const [backPull, setBackPull] = useState("");
  const [guarantee, setGuarantee] = useState("");
  const [period, setPeriod] = useState("");
  const [industry, setIndustry] = useState("");
  const [storeName, setStoreName] = useState("");
  const [prefecture, setPrefecture] = useState("");
  const [industries, setIndustries] = useState([]);
  const [stores, setStores] = useState([]);

  const prefectures = ["北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県", "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県", "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県", "静岡県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県", "徳島県", "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"];

  useEffect(() => {
    // Mock API call to fetch industries and stores
    const fetchIndustriesAndStores = async () => {
      const industriesData = ["キャバクラ", "ラウンジ", "ガールズバー", "デリヘル", "ソープ", "メンズエステ", "ピンサロ"];
      const storesData = ["店舗A", "店舗B", "店舗C"];
      setIndustries(industriesData);
      setStores(storesData);
    };

    fetchIndustriesAndStores();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, e.g., sending data to an API
    console.log("Content:", content);
    console.log("Spec:", spec);
    console.log("Hourly Wage:", hourlyWage);
    console.log("Total Payment:", totalPayment);
    console.log("Back Pull:", backPull);
    console.log("Guarantee:", guarantee);
    console.log("Period:", period);
    console.log("Industry:", industry);
    console.log("Store Name:", storeName);
    console.log("Prefecture:", prefecture);
  };

  return (
    <Box p={4}>
      <Heading>新規投稿</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="industry" isRequired mt={4}>
          <FormLabel>業界</FormLabel>
          <Select
            placeholder="業界を選択"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          >
            {industries.map((ind, index) => (
              <option key={index} value={ind}>{ind}</option>
            ))}
          </Select>
        </FormControl>
        <FormControl id="prefecture" isRequired mt={4}>
          <FormLabel>都道府県</FormLabel>
          <Select
            placeholder="都道府県を選択"
            value={prefecture}
            onChange={(e) => setPrefecture(e.target.value)}
          >
            {prefectures.map((pref, index) => (
              <option key={index} value={pref}>{pref}</option>
            ))}
          </Select>
        </FormControl>
        <FormControl id="storeName" isRequired mt={4}>
          <FormLabel>店舗名</FormLabel>
          <Select
            placeholder="店舗を選択"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
          >
            {stores.map((store, index) => (
              <option key={index} value={store}>{store}</option>
            ))}
          </Select>
        </FormControl>
        <FormControl id="totalPayment" isRequired mt={4}>
          <FormLabel>総支給</FormLabel>
          <Input
            type="text"
            value={totalPayment}
            onChange={(e) => setTotalPayment(e.target.value)}
          />
        </FormControl>
        <FormControl id="hourlyWage" mt={4}>
          <FormLabel>時給</FormLabel>
          <Input
            type="text"
            value={hourlyWage}
            onChange={(e) => setHourlyWage(e.target.value)}
          />
        </FormControl>
        <FormControl id="guarantee" mt={4}>
          <FormLabel>保証</FormLabel>
          <Input
            type="text"
            value={guarantee}
            onChange={(e) => setGuarantee(e.target.value)}
          />
        </FormControl>
        <FormControl id="spec" mt={4}>
          <FormLabel>スペック</FormLabel>
          <Input
            type="text"
            value={spec}
            onChange={(e) => setSpec(e.target.value)}
          />
        </FormControl>
        <FormControl id="backPull" mt={4}>
          <FormLabel>裏引</FormLabel>
          <Input
            type="text"
            value={backPull}
            onChange={(e) => setBackPull(e.target.value)}
          />
        </FormControl>
        <FormControl id="period" mt={4}>
          <FormLabel>期間</FormLabel>
          <Input
            type="text"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          />
        </FormControl>
        <FormControl id="content" mt={4}>
          <FormLabel>内容</FormLabel>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          送信
        </Button>
      </form>
    </Box>
  );
};

export default NewPost;