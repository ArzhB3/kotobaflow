import { editProfile } from '@/app/profile/edit/edit-profile.action';
import { getUserEdit } from '@/src/query/user.query';
import { EditProfileModal } from './editProfileModal';

export default async function EditPage() {
	const user = await getUserEdit();

	return (
		<EditProfileModal
			user={user}
			editProfile={editProfile}
		/>
	);
}
