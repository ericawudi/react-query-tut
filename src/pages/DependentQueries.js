import axios from "axios";
import { useQuery } from "react-query";
import { Constants as K } from "../assets/Constants";

const fetchUserByEmail = (email) => {
  return axios.get(`${K.BASE_URL}/users/${email}`);
};

const fetchCourseByChannelId = (channelId) => {
  return axios.get(`${K.BASE_URL}/channels/${channelId}`);
};

function DependentQueries({ email }) {
  const { data: user } = useQuery(["user", email], () =>
    fetchUserByEmail(email)
  );

  const channelId = user?.data.channelId;

  const { data: channel } = useQuery(
    ["courses", channelId],
    () => fetchCourseByChannelId(channelId),
    {
      enabled: !!channelId,
    }
  );

  console.log(channel);

  return (
    <>
      <div>DependentQueries: Check console and react query dev tool</div>
    </>
  );
}

export default DependentQueries;
