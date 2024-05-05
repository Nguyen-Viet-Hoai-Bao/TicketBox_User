import { Form, Input, Button, Card } from 'antd';
import PropTypes from 'prop-types';

const UpdateForm = ({ onClose, userData }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values:', values);
    onClose(); // Đóng form sau khi hoàn thành cập nhật
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card title="Cập nhật thông tin cá nhân" bordered={false} style={{ width: '50%' }}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          style={{ display: 'block' }}
          initialValues={userData} // Truyền userData vào initialValues để hiển thị sẵn thông tin
        >
          <Form.Item
            label="Tên"
            name="name"
            rules={[
                { required: true, message: 'Vui lòng nhập tên!' },
                { pattern: /^[^\d]+$/, message: 'Tên không được chứa số!' }, // Regular expression pattern to disallow numbers
            ]}
            >
            <Input />
          </Form.Item>
      {/* <Form.Item
            label="Tuổi"
            name="age"
            rules={[
                { required: true, message: 'Vui lòng nhập tuổi!' },
                { type: 'number', message: 'Tuổi phải là một số!' }, // Ensure the input is a number
                { validator: (_, value) => value >= 0 ? Promise.resolve() : Promise.reject('Tuổi không được nhỏ hơn 0!') }, // Custom validation rule
            ]}
            >
            <Input type="number" />
          </Form.Item> */}

          <Form.Item
            label="Địa chỉ"
            name="address"
            rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
                { required: true, message: 'Vui lòng nhập email!' },
                { type: 'email', message: 'Email không hợp lệ!' }, // Ensure the input is a valid email format
                { pattern: /^[^\s@]+@gmail\.com$/, message: 'Email phải là địa chỉ Gmail!' }, // Regular expression pattern
            ]}
            >
            <Input />
          </Form.Item >
          <Form.Item
            label="Số điện thoại"
            name="phone"
            rules={[
                { required: true, message: 'Vui lòng nhập số điện thoại!' },
                { pattern: /^\d{10}$/, message: 'Số điện thoại phải có đúng 10 chữ số!' }, // Regular expression pattern
            ]}
            >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Cập nhật
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
UpdateForm.propTypes = {
  onClose: PropTypes.func.isRequired, // onClose là một function bắt buộc được truyền vào
  userData: PropTypes.object.isRequired // userData là một object bắt buộc được truyền vào
};
export default UpdateForm;

