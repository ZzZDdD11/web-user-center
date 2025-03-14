import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = '昊哥出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[

        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/ZzZDdD11',
          blankTarget: true,
        },

      ]}
    />
  );
};
export default Footer;
