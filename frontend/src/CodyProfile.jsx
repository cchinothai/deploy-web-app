import React from "react";
import { Card, Anchor, Avatar } from 'antd';

const CodyProfile = () => {
    const { Link } = Anchor;

    return (
        <Card stye={{ width: '25%', textAlign: 'center'}}>
            <h1 data-testid="cody-chinothai">Cody Chinothai</h1>
            <p>
                This is my contact card
            </p>
            <Anchor>
                <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/cody-chinothai/"
                    title="My LinkedIn"
                >
                </Link>
            </Anchor>
        </Card>
    )
};

export default CodyProfile
